window.onload = function() {
  var width = 640;
  var height = 480;
  var favorites = [];
  const faceMode = affdex.FaceDetectorMode.LARGE_FACES
  const detector = new affdex.CameraDetector(document.querySelector('#video'),width, height, faceMode)
  detector.detectEmotions.joy=true;
  setTimeout(showSet, 35000);
  setTimeout(removeSet, 45000);
  setTimeout(showFirst, 50000);
  setTimeout(removeFirst, 55000);
  setTimeout(showSecond, 57000);
  setTimeout(removeSecond, 62000);
  setTimeout(showThird, 64000);
  setTimeout(removeThird, 69000);
  setTimeout(showFourth, 71000);
  setTimeout(removeFourth, 76000);
  detector.addEventListener( 'onImageResultsSuccess', function( faces ) {
      if( faces.length > 0 ) {
          //document.querySelector('#Emotion').innerText = faces[0].emotions.joy
          if(faces[0].emotions.joy > 90 && document.getElementById("set1pic1").style.display === "block"){
              favorites.push(1);
          }
          else if(faces[0].emotions.joy > 90 && document.getElementById("set1pic2").style.display === "block"){
              favorites.push(2);
          }
          else if(faces[0].emotions.joy > 90 && document.getElementById("set1pic3").style.display === "block"){
              favorites.push(3);
          }
          else if(faces[0].emotions.joy > 90 && document.getElementById("set1pic4").style.display === "block"){
              favorites.push(4);
          }
      }
      if (favorites[0] == 1){
          setTimeout(function(){
              document.getElementById("winner").innerHTML = "<img src=\"https://lh6.googleusercontent.com/uLbkriRhRABFXdCVzmRTN-Bt8u8wUZPjNYwTY9M-4GjSP060aWEe7_XHWUB0au7Wt1O23C0ik379XgJTPJVTtMz2XpHxjyV8cQ6FuO6i8F8Rc9WJvhb1vY92f4WPIcUidzg0IRVy\" width=\"350px\" height=\"350px\">";
          }, 34000);
      }
      else if (favorites[0] == 2){
          setTimeout(function(){
              document.getElementById("winner").innerHTML = "<img src=\"https://lh4.googleusercontent.com/dgDRoQPirNtsfDIDp5htsxXJbb8DFUOPzOwZY0yksF-u68qqNoFM33LMG8X-3rkRa1c35w1hli4ZtC3GVHPj6xrMK0WNI57TmYTMBYFxtZoeUTlQgP1HPv6F9wkRpiQuZ5w0mnr_ \" width=\"350px\" height=\"350px\">";
          }, 26000);
      }
      else if (favorites[0] == 3){
          setTimeout(function(){
              document.getElementById("winner").innerHTML = "<img src=\"https://lh5.googleusercontent.com/DIdwGiAHTFtpABNopJ7yV8bmBy8hN0Yl82C5Iwh4RdxXqwMp4HyEYX9FKRHkipliUiq3AuEaXsrsUs2JremQWfXOaCS6gxUkLqN6FhifVPO77VsJMObosm5MykEvMdXxGKPunlGO\" width=\"350px\" height=\"350px\">";
          }, 20000);
      }
      else if (favorites[0] == 4){
          setTimeout(function(){
              document.getElementById("winner").innerHTML = "<img src=\"https://lh3.googleusercontent.com/A7oqUhS6hGs273YQXcULAsZYmcjoZpxZ-Hfm_nGrpt-h-agB7gPEY0FQNTlUHgum7PKZXWkBk8Xr_iFD-dW8Wlayve3Dempkne0muKhClPCop-bbecSaglOKEyT9CuY61NW_6ZPJ\" width=\"350px\" height=\"350px\">";
          }, 13000);
      }
  })
  detector.start()
}