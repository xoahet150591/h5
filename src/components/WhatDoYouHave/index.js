import React, { useState,useEffect } from "react";
import Container from "components/Container";
import "./styles.scss";


import { useSelector } from "react-redux";
import audioPlayer from 'helper/audioPlayer'
import audios from "assets/audios/index";

const WhatDoYouHave = (props) => {
  const { onPushAction, page27 } = props;
  const [classImage, setClassImage] = useState("");
  const { title, icQues } = props;


  const {playAudio,pauseAudio} = audioPlayer

	const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

	const imgClickEventName = page27

	const imgClickHandler = (e,op)=>{
		onPushAction(e,op.actionType,op)
	}

	useEffect(()=>{
		if(currentRecord.length > 0){
			let recordEventData = currentRecord[currentRecord.length-1];
			if(recordEventData.eventPage === currentPage && 
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === imgClickEventName){
				console.log(`runRecordEvent`,recordEventData)

        //playAudio & do somethings
        if(recordEventData.eventData.active){
          setClassImage("active");
          let audioUrl = audios.find((item) => item.id === recordEventData.eventData.playAudios[0])?.audio
          playAudio(audioUrl)
          setTimeout(() => {
            let audioUrl1 = audios.find((item) => item.id === recordEventData.eventData.playAudios[1])?.audio
            playAudio(audioUrl1)
          }, 1000);
        }else {
          let audioUrl = audios.find((item) => item.id === recordEventData.eventData.playAudio)?.audio
          playAudio(audioUrl)
        }
				
			}
		}
	},[currentRecord])

  var content = page27.map((item, index) => {
    if (item.active === false)
      return (
        <img
          className="text-wrapper"
          alt={item.image}
          src={item.image}
          onClick={(e) => {
            imgClickHandler(e,{
              actionType: 'fireEvent',
              eventName: imgClickEventName,
              eventData: {
                active: false,
                playAudio:"audioFalse"
              }
            })
            //onPushAction(e, "play_audio", "audioFalse");
          }}
        />
      );
    return (
      <img
        className={` text-wrapper ${classImage ? classImage : ""} `}
        alt={item.image}
        src={item.image}
        onClick={(e) => {
          imgClickHandler(e,{
            actionType: 'fireEvent',
            eventName: imgClickEventName,
            eventData: {
              active: true,
              playAudios:["audioTrue",item.clap]
            }
          })

          // onPushAction(e, "play_audio", "audioTrue");
          // setClassImage("active");
          // setTimeout(() => {
          //   onPushAction(e, "play_audio", item.clap);
          // }, 1000);
        }}
      />
    );
  });
  const renderContent = () => {
    return (
      <div className="page27-wrapper">
        <img
          data-aos="fade-right"
          className="title-screen"
          src={title}
          alt={title}
        />
        <div className="page27-wrapper__content">
          <div className="page27-wrapper__content--wrapper">
            <div className="text-wrapper" data-aos="fade-right">
              {content}
            </div>
            <div className="page27-Ques">
              <img
                src={icQues}
                alt={icQues}
                data-aos="fade-left"
                data-aos-duration="500"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <Container content={renderContent()} currentPage={currentPage} />;
};

export default WhatDoYouHave;
