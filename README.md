# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `页面开发须知`-----Những điều cần biết khi build trang
开发前必读--trước khi build cần xem trước tài liệu build H5 BAIJIAYUN này
百家云H5课件 开发文档--
https://dev.baijiayun.com/wiki/detail/87

### `课件打包须知` Những điều cần lưu ý khi nén file
百家云H5课件zip要求压缩包内跟目录为一个英文名的文件夹，此文件夹中需要有index.html文件作为课件入口。-file zip H5 BAIJIAYUN này khi nén file cần có 1 tên tệp bằng tiếng anh , trong tệp này  cần phải có 1 file   index.html làm lỗi dẫn vào lớp học 

执行 yarn build 之后，只需要将build目录（可以改名）打成zip压缩包即可上传--Sau khi tiến hành yarn build xong , chỉ cần cho thư mục build (có thể đổi tên khác) nén thành file zip là có thể up lên được

### `百家云同步机制`  CƠ CHẾ ĐỒNG BỘ CỦA BAIJIAYUN

1，交互事件触发，将事件发送到百家云，此时只发送事件内容，不能做任何的事件执行（如页面跳转、动画、显示等）
-trình kích hoạt sự kiện tương tác, các sự kiện sẽ được gửi  đến BAIJIAYUN, lúc này mới chỉ là gửi đi nội dung của sự kiện, chưa thể làm được bất cứ 1 hành động nào cho sự kiện đó ( như là chuyển trang , hoạt họa, hiển thị, vv)

2，待百家云sdk回调后，进行回调事件判断，如果是当前页面的事件，再进行页面事件执行（如动画、显示等），其中页面跳转会自动完成。Sau khi SDK Baijiayun được gọi lại, tiến hành phán đoán sự kiện , nếu đó là sự kiện của trang hiện tại, tiếp tục tiến hành hành động cho sự kiện của trang ( như hoạt họa, hiển thị, vv)

事件包含：页面（page）跳转 ｜ 步骤（step）跳转 ｜ 操作事件（eventRecord）
page，step，record，prevRecord 等数据均会自动存在redux中----Các sự kiện bao gồm: chuyển trang/ chuyển bước/ thao tác sự kiện ,  
page，step，record，prevRecord và các dữ liệu khác sẽ được tự động lưu trữ trong redux


####  `事件发送方式`---Cách thức gửi đi sự kiện 
其中onPushAction方法可由上层组件传入--Trong đó phương thức onPushAction có thể  được chuyển vào bởi tổ hợp phía trên
    const { onPushAction } = props;

    onPushAction(e,{
        actionType: [changePage,fireEvent]
        eventName: EventName:string,
        eventData: {
            ...
        }
    })

    //页面跳转---Chuyển trang
    onPushAction(e,{
        actionType: 'changePage'
        eventName: 'eg: from XXXX page',
        eventData: {
            page:10,
            step:0
        }
    })

    //操作事件--THao tác sự kiện
    onPushAction(e,{
        actionType: 'fireEvent'
        eventName: 'eg: from XXXX page',
        eventData: {
            playAudio:"iHaveAPaper"
            ...someData
        }
    })

    操作事件在提交之前，在外层会自动加入当前页面和步骤两个数据-Trước khi thao tác sự kiện  được truyền đi,  lớp ngoài sẽ tự dộng thêm vào đó hai dữ liệu là bước(step) và trang hiện tại
    {
        eventPage: currentPage,
        eventPageStep: currentStep,
    }
```

####  `事件响应方式`----Phương thức ứng phó sự kiện 
页面获取redux中的 currentRecord，对最后一条进行判断，如果符合本页的事件，执行事件
Trang nhận về các currentRecord trong redux, và phán đoán theo cái bản ghi cuối cùng, nếu nó phù hợp với sự kiện của trang này thì tiến hành thao tác sự kiện đó
```
    import { useSelector } from "react-redux";

    const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

    useEffect(()=>{
		if(currentRecord.length > 0){
			let recordEventData = currentRecord[currentRecord.length-1];
			if(recordEventData.eventPage === currentPage && 
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === imgClickEventName){
				console.log(`runRecordEvent`,recordEventData)
				setImages(recordEventData.eventData.images);
				setImageIcons(recordEventData.eventData.imageIcons);

				//do something
			}
		}
	},[currentRecord])
```

### `本地主要的redux数据`----Dữ liệu redux chính 

```
    currentPage:0,//当前页面 trang hiện tại
    currentStep:0,//当前页面的步骤-- bước (step) trang hiện tại)
    currentRecord:[],//当前页面的操作事件列表记录 ---danh sách bản ghi các sự kiện của trang hiện tại
    prevRecord:[],//上一次操作的事件列表记录---danh sách  bản ghi các sự kiện  thao tác ở lần trước 
```
