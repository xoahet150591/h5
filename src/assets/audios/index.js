// Phần này là của Phương ninh có thể sử dụng
import page2AudioBg from "./page_2/sing.mp3";
import page3AudioBg from "./page_3/talk.mp3";
import page4AudioBg from "./page_4/sit.mp3";
import page5AudioBg from "./page_5/stand.mp3";

import audioFalse from "./common/false.mp3";
import audioTrue from "./common/true.mp3";
import audioGit from "./common/git.mp3";
// import audio bg
import audioBg from "./home/audio-bg.mp3";
import nenPikachu from "./common/nenPikachu.mp3";

// audio page 1
import helloIAmDanny from "./page_1/hello-i-am-danny.mp3";
import helloIAmEmma from "./page_1/hello-i-am-emma.mp3";
import helloIAmJulie from "./page_1/hello-i-am-julie.mp3";
import helloIAmMike from "./page_1/hello-i-am-mike.mp3";
import iHaveAPaint from "./page_1/paint.mp3";
import iHaveAScrissor from "./page_1/scrissor.mp3";
import iHaveAGlue from "./page_1/glue.mp3";
import iHaveAPaper from "./page_1/page.mp3";

// audio page 6
import sing from "./page_6/sing.mp3";
import sit from "./page_6/sit.mp3";
import stand from "./page_6/stand.mp3";
import talk from "./page_6/talk.mp3";
import clap from "./page_6/votay.mp3";

// audio page 7
import paint from "./page_7/paint.mp3";

// audio page 8
import whatDoYouHave1 from "./page_8/whatDoYouHave.mp3";

// audio page 9

// audio page 10

// audio page 11
import singPage11 from "./page_11/sing.mp3";

// audio page 12
import pencil from "./page_12/pencil.mp3";
import sitPage12 from "./page_12/sit.mp3";
//audio page 13
import talkPage13 from "./page_13/talk.mp3";
import pen from "./page_13/pen.mp3";
//audio page 14

import crayon from "./page_14/crayon.mp3";

//audio page 15

import marker from "./page_15/marker.mp3";

//audio page 16
import what from "./page_16/what.mp3";

//audio page 17
import glue from "./page_17/glue.mp3";

//audio page 18
import keo from "./page_18/keo.mp3";

//audio page 21
import page21_Voice from "./page_21/page21-voice.mp3";

//audio page 22
import page22_voice from "./page_22/page22-voice.mp3";
// audio page 24
import page24_voice from "./page_24/page-24.mp3";

const audios = [
	audioBg,
	// audio false

	{
		id: "audioFalse",
		audio: audioFalse,
		isAudioResult: true,
	},
	// audio true
	{
		id: "audioTrue",
		audio: audioTrue,
		isAudioResult: true,
	},
	// audio git
	{
		id: "git",
		audio: audioGit,
		isAudioResult: true,
	},
	// audio bg
	{
		id: "audioBg",
		audio: audioBg,
	},
	{
		id: "page3AudioBg",
		audio: page3AudioBg,
	},
	// audio text
	{
		id: "helloIAmDanny",
		audio: helloIAmDanny,
		page: 1,
	},
	{
		id: "helloIAmEmma",
		audio: helloIAmEmma,
		page: 1,
	},
	{
		id: "helloIAmJulie",
		audio: helloIAmJulie,
		page: 1,
	},
	{
		id: "helloIAmMike",
		audio: helloIAmMike,
		page: 1,
	},
	{
		id: "glue",
		audio: glue,
		page: 5,
	},
	{
		id: "paint",
		audio: paint,
		page: 7,
	},
	{
		id: "whatDoYouHave1",
		audio: whatDoYouHave1,
		page: 8,
	},
	{
		id: "iHaveAPaper",
		audio: iHaveAPaper,
		page: 1,
	},
	{
		id: "iHaveAGlue",
		audio: iHaveAGlue,
		page: 1,
	},
	{
		id: "iHaveAScrissor",
		audio: iHaveAScrissor,
		page: 1,
	},
	{
		id: "iHaveAPaint",
		audio: iHaveAPaint,
		page: 1,
	},
	{
		id: "pencil",
		audio: pencil,
		page: 12,
	},
	{
		id: "pen",
		audio: pen,
		page: 13,
	},
	{
		id: "crayon",
		audio: crayon,
		page: 13,
	},
	{
		id: "marker",
		audio: marker,
		page: 13,
	},
	{
		id: "what",
		audio: what,
		page: 16,
	},

	{
		id: "keo",
		audio: keo,
		page: 18,
	},
	{
		id: "page24_Voice",
		audio: page21_Voice,
		page: 21,
	},
	{
		id: "page25_voice",
		audio: page22_voice,
		page: 22,
	},
	{
		id: "nenPikachu",
		audio: nenPikachu,
	},
	// page 6
	{
		id: "sing",
		audio: sing,
		page: 6,
	},
	{
		id: "sit",
		audio: sit,
		page: 6,
	},
	{
		id: "clap",
		audio: clap,
		page: 6,
	},
	{
		id: "stand",
		audio: stand,
		page: 6,
	},
	{
		id: "talk",
		audio: talk,
		page: 6,
	},

	{
		id: "page2_sing",
		audio: page2AudioBg,
		page: 2,
	},
	{
		id: "page3_talk",
		audio: page3AudioBg,
		page: 3,
	},
	{
		id: "page4_sit",
		audio: page4AudioBg,
		page: 4,
	},
	{
		id: "page5_talk",
		audio: page5AudioBg,
		page: 5,
	},
	{
		id: "page24_voice",
		audio: page24_voice,
		page: 24,
	},
	{
		id: "singPage11",
		audio: singPage11,
		page: 11,
	},
	{
		id: "sitPage12",
		audio: sitPage12,
		page: 12,
	},
	{
		id: "talkPage13",
		audio: talkPage13,
		page: 13,
	},
];

export default audios;
