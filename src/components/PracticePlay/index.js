import React, {  useState } from "react";
import Container from "components/Container";
import BoxNext from "components/BoxNext/index";
import images from "assets/images/index";
import "./styles.scss";
// import Aos from "aos";
// import "aos/dist/aos.css";

const PracticePlay = (props) => {
  const [classImage, setClassImage] = useState("");
//   useEffect(() => {
//     Aos.init()
// } ,[])

  const { currentPage, onPushAction, page6 } = props;
  const { imageKids, className } = props;

  var content = page6.map((item, index) => {
    if (item.active === false)
      return (
        <img
          className="item"
          // data-aos="fade-right"
          alt={item.image}
          src={item.image}
          onClick={(e) => {
            onPushAction(e, "play_audio", "audioFalse");
          }}
        />
      );
    return (
      <img
        className={` item ${classImage ? classImage : ""} `}
        // data-aos="fade-right"
        alt={item.image}
        src={item.image}
        onClick={(e) => {
          onPushAction(e, "play_audio", "audioTrue");
          setClassImage("active");
          setTimeout(() => {
            onPushAction(e, "play_audio", item.audio);
          }, 2000);
          setTimeout(() => {
            onPushAction(e, "play_audio", item.clap);
          }, 3000);
        }}
      />
    );
  });

  const renderContent = () => {
    return (
      <div className={` page6-wrapper ${className ? className : ""} `}>
        <div className="page6-wrapper__content--topic">
          <img
            className="topic"
            src={images.icons.topic6}
            alt={images.icons.topic6}
          />
        </div>
        <div className="page6-wrapper__content">
          <div className="page6-wrapper__content--answer">
            <div className="mid-item" >
              <img className="item kids"
                // data-aos="fade-down"
               alt={imageKids} 
               src={imageKids} />
              <img
                className="item ans"
                alt={images.icons.answer6}
                src={images.icons.answer6}
              />
            </div>
            <div className="star">{content}</div>
          </div>
        </div>
      </div>
    );
  };
  return <Container content={renderContent()} currentPage={currentPage} />;
};
export default PracticePlay;
