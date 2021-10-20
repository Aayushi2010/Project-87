var canvas= new fabric.Canvas("myCanvas");

player_x= 10;
player_y= 10;

block_img_width= 30;
block_img_height= 30;

var player_object= "";
var block_img_object= "";

function player_update()

{
    fabric.Image.fromURL("player.png", function (Img)
    {
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object)
    }
    );
}

function new_image(get_image)

{
    fabric.Image.fromURL(get_image, function (Img)
    {
        block_img_object= Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y,
            left: player_x
        }); 
        canvas.add(block_img_object)
    }
    );
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)

{
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == "80")
    {
        console.log("p and shift together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keypressed == "77")
    {
        console.log("m and shift together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (keypressed == "66")

    {
        new_image("blue_man.png");
        console.log("b key clicked");
    }

    if (keypressed == "71")

    {
        new_image("gree_man.png");
        console.log("g key clicked");
    }

    if (keypressed == "80")

    {
        new_image("pink_man.png");
        console.log("p key clicked");
    }

    if (keypressed == "89")

    {
        new_image("yellow_man.png");
        console.log("y key clicked");
    }

    if (keypressed == "82")

    {
        new_image("red_man.png");
        console.log("r key clicked");
    }
}
