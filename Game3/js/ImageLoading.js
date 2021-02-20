 //=================================================CAR1
 var carPic = document.createElement("img");
 var otherCarPic = document.createElement("img");
 var carPicLoaded = false;
 //=================================================TRACK
 var trackPics = [];

 /*var roadPic = document.createElement("img");
 var wallPic = document.createElement("img");
 var goalPic = document.createElement("img");
 var treePic = document.createElement("img");
 var flagPic = document.createElement("img");*/
 //=================================================OVERALL

 var picsRemainingToLoad = 0; // will be later set automatically based on imageList in loadImages()


 function countLoadedImagesAndLaunchIfReady() {
     picsRemainingToLoad--;
     console.log(picsRemainingToLoad);
     if (picsRemainingToLoad == 0) {
         ImageLoadingDoneSoStartGame();
     }
 }

 function beginLoadingImage(imgVar, fileName) {
     imgVar.onload = countLoadedImagesAndLaunchIfReady;
     imgVar.src = "images/" + fileName;
 }



 function carImageLoad() {}

 function trackLoadImages() {}

 function loadImageForTrackCode(trackCode, fileName) {

     trackPics[trackCode] = document.createElement("img");
     beginLoadingImage(trackPics[trackCode], fileName);

 }

 function loadImages() {
     //var dataSet = {varName : "something", theFile : "something else"};
     //dataSet.varName===================================================OBJECT LITERAL

     var imageList = [

         { varName: carPic, theFile: "player1car.png" },
         { varName: otherCarPic, theFile: "player2car.png" },
         { trackType: TRACK_ROAD, theFile: "track_road_texture.png" },



         { trackType: TRACK_WALL, theFile: "track_wall_texture.png" },
         { trackType: TRACK_GOAL, theFile: "track_goal.png" },
         { trackType: TRACK_TREE, theFile: "track_trees.png" },
         { trackType: TRACK_FLAG, theFile: "track_flag.png" }

     ]

     picsRemainingToLoad = imageList.length;

     for (var i = 0; i < imageList.length; i++) {
         if (imageList[i].varName != undefined) {
             beginLoadingImage(imageList[i].varName, imageList[i].theFile);
         } else {
             loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
         }
     }


     //beginLoadingImage(carPic,"player1car.png");
     //beginLoadingImage(roadPic, "track_road_texture.png");
     //beginLoadingImage(wallPic, "track_wall_texture.png");
     //carImageLoad();
     //trackLoadImages();
 }