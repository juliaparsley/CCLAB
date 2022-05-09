let words = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  



  // create a new Word and add it to the list of words
  words.push(
    new Word("clouds", 24, [
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
      "https://www.buyv2cigs.co.uk/product_images/uploaded_images/big-vape-clouds.jpg",
    ])
  );
  words.push(
    new Word("houses", 14, [
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg",
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1535395745-91v-5aj4sxl-sl1500-1535395739.jpg",
    ])
  );
  words.push(
    new Word("cats", 30, [
      "https://images.newscientist.com/wp-content/uploads/2021/09/07151312/PRI_198391221.jpg",
      "https://dinoanimals.com/wp-content/uploads/2016/06/Largest-wild-cats-1120x700.jpg",
    ])
  );
  words.push(
    new Word("dogs", 20, [
      "https://www.science.org/do/10.1126/science.abi5787/abs/main_puppies_1280p.jpg",
      "https://static.wikia.nocookie.net/paw-patrol/images/1/15/3F09A737-3A4C-43E9-BA62-EF580D9D1984.jpeg/revision/latest?cb=20180603231720",
    ])
  );
  words.push(
    new Word("flowers", 35, [
      "https://media.timeout.com/images/105645687/image.jpg",
      "https://i.pinimg.com/originals/63/1a/af/631aaf1da2edcb36ace34924e0706aa2.jpg",
    ])
  );
  words.push(
    new Word("sky", 10, [
      "https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg",
      "https://s3.envato.com/files/250432085/preview%20image.jpg",
    ])
  );
  words.push(
    new Word("stars", 17, [
      "https://static.wikia.nocookie.net/starwars/images/2/2c/Starfield.jpg/revision/latest?cb=20210820011702",
      "https://im.vsco.co/aws-us-west-2/34532c/141076656/5f4238421b01d773311d95bc/vsco5f4238441372a.jpg?w=480",
    ])
  );
  words.push(
    new Word("tea", 22, [
      "https://myhaneerbil.com/wp-content/uploads/960x0.jpg",
      "https://i.ytimg.com/vi/6ULoMwI0l5w/maxresdefault.jpg",
    ])
  );
  words.push(
    new Word("coffee", 12, [
      "https://www.tastingtable.com/img/gallery/20-different-types-of-coffee-explained/intro-1646842160.jpg",
      "https://i.pinimg.com/originals/17/b5/df/17b5df62edf0fdaaea044082e852401c.jpg",
    ])
  );
  words.push(
    new Word("paper", 14, [
      "https://www.skillshare.com/blog/wp-content/uploads/2021/07/Wrinkle-Paper-Textures-2-Deeezy-4.jpeg",
      "https://www.investopedia.com/thmb/myCqCtkZlTwYkFu0e4plqazVM4s=/1500x844/smart/filters:no_upscale()/GettyImages-1054017850-0c7ca7d8368c4ab681a3d9c0fd2892e8.jpg",
    ])
  );
  words.push(
    new Word("beauty", 32, [
      "https://i.redd.it/2cxmkwj0aqa31.jpg",
      "https://images.ctfassets.net/wlke2cbybljx/6mPk5fQdHG1kigUEwHDozx/9e2930e8ac4b6f83a6e94b60e2f5b44a/PILLOW_TALK_MAKEUP_SECRETS-PT_Dreams-Packshot.png",
    ])
  );
  words.push(
    new Word("chocolate", 40, [
      "https://www.arobasecafe.com/wp-content/uploads/2022/03/Chocolate.jpg",
      "https://i.pinimg.com/originals/5b/16/b8/5b16b881e0cd59bbfc7a4afff747b2d1.jpg",
    ])
  );
  words.push(
    new Word("sun", 15, [
      "https://static.bhphotovideo.com/explora/sites/default/files/ts-space-sun-and-solar-viewing-facts-versus-fiction.jpg",
      "https://i.pinimg.com/originals/73/fc/46/73fc46ca208dfe2c44616b00baf76e2f.png",
    ])
  );
  words.push(
    new Word("earth", 18, [
      "https://cdn.mos.cms.futurecdn.net/3upZx2gxxLpW7MBbnKYQLH-1200-80.jpg",
      "https://climate.nasa.gov/system/internal_resources/details/original/656_cc-vs-gw-vs-wx-470x246.jpg",
    ])
  );
  words.push(
    new Word("music", 20, [
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg",
      "https://img.apmcdn.org/c75e4ad850e43237fe0568a59ab71b15cb2511ac/uncropped/b80d45-20120627-flute-concert.jpg",
    ])
  );
  words.push(
    new Word("phone", 14, [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=90&.v=1567022175704",
      "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/07/1200/675/phone-gesture.jpg?ve=1&tl=1",
    ])
  );
  words.push(
    new Word("computer", 23, [
      "https://blog.solidsignal.com/wp-content/uploads/2018/03/640px-IBM_PC_5150-640x437.jpg",
      "https://thesecondangle.com/wp-content/uploads/2022/03/high-gaming-pc.jpg",
    ])
  );
  words.push(
    new Word("apple", 28, [
      "https://www.eshopwedrop.pl/images/shops_logo/5e367cdacddfcdb14a12b2ba6a2ef55e.png",
      "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=",
    ])
  );
  words.push(
    new Word("pets", 22, [
      "https://i.cbc.ca/1.5077459.1553886010!/fileImage/httpImage/pets.jpg",
      "https://www.thesprucepets.com/thmb/w6OtFvqbp36xyoaRRG-t4iLbQaM=/1333x1000/smart/filters:no_upscale()/best-pet-tarantula-species-4176793-rev-1820f0f41c8c49dc99a9b0c11b3e264f.png",
    ])
  );
  words.push(
    new Word("cartoons", 34, [
      "https://i.pinimg.com/originals/c4/54/48/c45448cdafe97a4fbc309c27db98738a.png",
      "https://www.filmawka.pl/wp-content/uploads/2020/03/Naruto.jpg",
    ])
  );
  words.push(
    new Word("foundation", 15, [
      "https://www.thespruce.com/thmb/v07VeOKEZeyWPpy3v7vRyDjDgpA=/3865x2576/filters:fill(auto,1)/residential-construction-site-foundation-walls-184391602-58a5ccf85f9b58a3c9ad94bb.jpg",
      "https://images.kikocosmetics.com/mediaObject/2022/launches/no-filter/Launch_NoFilter_ProductPage-Tris_FullCoverage-Vertical/original/Launch_NoFilter_ProductPage-Tris_FullCoverage-Vertical.jpg",
    ])
  );
  words.push(
    new Word("lungs", 30, [
      "https://post.healthline.com/wp-content/uploads/2020/07/respiratory1-22.jpg",
      "https://interactive.aljazeera.com/aje/2016/lungs-of-the-earth/images/picture_two.jpg",
    ])
  );
  words.push(
    new Word("bunny", 24, [
      "https://external-preview.redd.it/ytWeJPaWCx0GAnX-mT1kceXs8BFJIP3OrmnV6DVlRtg.jpg?auto=webp&s=a1b44170211b6ea5fbf7dd56b9fb7efe2d3dae52",
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png",
    ])
  );
  words.push(
    new Word("crayons", 12, [
      "https://shop.crayola.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-crayola-storefront/default/dwdfa66042/images/52-3008_8ct_Crayons_PDP_02.jpg?sw=790&sh=790&sm=fit&sfrm=jpg",
      "https://www.coinmakeup.com/6732-large_default/crayon-yeux-slim-eye-pencil-nyx.jpg",
    ])
  );
  words.push(
    new Word("film", 18, [
      "https://media-exp1.licdn.com/dms/image/C4E1BAQGpDH5mkW3m9Q/company-background_10000/0/1601044046389?e=2147483647&v=beta&t=m7aNNYquHbHTdKl30vF27CKnLMLmcoauMsiAxudu7LA",
      "https://lumiere-a.akamaihd.net/v1/images/image_a95a2b4f.jpeg?region=0,0,540,810&width=480",
    ])
  );
  words.push(
    new Word("sponge", 22, [
      "https://www.sephora.com/productimages/product/p228913-av-05-zoom.jpg?imwidth=315",
      "https://i-viaplay-com.akamaized.net/viaplay-prod/420/804/1485791623-3bcaf52cefff40e4c9a44e743eeb3b03ad84c73e.jpg?width=1600&height=900",
    ])
  );
  words.push(
    new Word("bags", 26, [
      "https://cdn.mos.cms.futurecdn.net/dDpBxHWpcMRwLUYgHjbRNL.jpg",
      "https://www.nj.com/resizer/edGNJ-KnY-ZJEDsMa2fnR0PJLcs=/arc-anglerfish-arc2-prod-advancelocal/public/UD3TUVQ4RREIZLIVZSTNK2JQKE.jpg",
    ])
  );
  words.push(
    new Word("store", 33, [
      "https://cdn.geekwire.com/wp-content/uploads/2020/02/amzngo1.jpeg",
      "https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=612x612&w=0&h=0bpyh7rdYCy3Lod5pfK9oS72zFPNJSBv7T7l64xUE90=",
    ])
  );
  words.push(
    new Word("baking", 28, [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/facebaking-gettyimages-1037456910.jpg",
      "https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/principles+of+baking/cover-image.jpg",
    ])
  );
  words.push(
    new Word("continent", 15, [
      "https://cdn.britannica.com/94/75394-050-395963DC/World-map-Continents-Oceans-Seas.jpg",
      "https://i2.cdn.turner.com/money/dam/assets/140620132500-traveling-experiences-seven-continent-1024x576.jpg",
    ])
  );
}

function mousePressed ()
{
  for (let i = 0; i < words.length; i++) {
    words[i].checkForClick();
  }
}


function draw() {
  background(255, 220, 220); 

  for (let i = 0; i < words.length; i++) {
    words[i].move();
    words[i].display();
  }
}

class Word {
  constructor(word, size, urls) {
    this.word = word;
    this.size = size;
    this.urls = urls;
    this.x = random(width);
    this.y = random(height);
  }

  move() {
    this.x = this.x + 1;

    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    textSize(this.size);
    text(this.word, 0, 0);
    pop();
  }

  checkForClick() {
    let d = dist(mouseX, mouseY, this.x, this.y);

    textSize(this.size);
    let w = textWidth(this.word);
    
    if (mouseIsPressed) {
      if (this.x <= mouseX && mouseX <= this.x+w &&
          this.y-this.size <= mouseY && mouseY <= this.y) {
            console.log("Image for " + this.word + ": " + random(this.urls));
           window.open(random(this.urls), '', 'left=100,top=100,width=320,height=320');

       
      }
    }
  }
}
