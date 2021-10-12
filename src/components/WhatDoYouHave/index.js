import React, { useState } from "react";
import Container from "components/Container";
import "./styles.scss";

const WhatDoYouHave = (props) => {
	const { currentPage, onPushAction, page27 } = props;
    const [classImage, setClassImage] = useState("");
	const {title,icQues} = props;

    var content = page27.map((item, index) => {
        if (item.active === false)
          return (
            <img
              className="text-wrapper"
              alt={item.image}
              src={item.image}
              onClick={(e) => {
                onPushAction(e, "play_audio", "audioFalse");
              }}
            />
          );
        return (
          <img
            className={` text-wrapper ${classImage ? classImage : ""} `}
            alt={item.image}
            src={item.image}
            onClick={(e) => {
              onPushAction(e, "play_audio", "audioTrue");
              setClassImage("active");
              setTimeout(() => {
                onPushAction(e, "play_audio", item.clap);
              }, 1000);
            }}
          />
        );
      });
	const renderContent = () => {
		return (
            <div className="page27-wrapper">
            <img
                className="title-screen"
                src={title}
                alt={title}
            />
            <div className="page27-wrapper__content">
                <div className="page27-wrapper__content--wrapper">
                <div className="text-wrapper">{content}</div>
                    <div className = "page27-Ques">
                    <img src={icQues} alt={icQues} />
                    
                    </div>
                    
                </div>
            </div>
            
        </div>
		);
	};
	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default WhatDoYouHave;
