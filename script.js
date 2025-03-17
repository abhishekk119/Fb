function doSomething() {
  const paragraph = document.getElementById("para");
  if (paragraph.style.display === 'none') {
                paragraph.style.display = 'block'; // Show the paragraph
            } else {
                paragraph.style.display = 'none';
}
  const paragraph2 = document.getElementById("para2");
  if (paragraph2.style.display === 'block') {
    paragraph2.style.display = 'none';
  }
}

function doThis() {
  const paragraph = document.getElementById("para");
  if (paragraph.style.display === 'block') {
    paragraph.style.display = 'none';
  }
  const paragraph2 = document.getElementById("para2");
  if (paragraph2.style.display === 'none') {
    paragraph2.style.display = 'block';
  } else {
                paragraph2.style.display = 'none';
}
  
}

function likeOne() {
	if (document.getElementById('liked').style.display === 'none')
	{
		document.getElementById('liked').style.display = 'block';
		}
		document.getElementById('lb1').style.backgroundColor="lightblue";
	}
	
function likeTwo() {
	if (document.getElementById('liked2').style.display === 'none')
	{
		document.getElementById('liked2').style.display = 'block';
		}
		document.getElementById('lb2').style.backgroundColor="lightblue";
	}
	
function likeThree() {
	if (document.getElementById('liked3').style.display === 'none')
	{
		document.getElementById('liked3').style.display = 'block';
		}
		document.getElementById('lb3').style.backgroundColor="lightblue";
	}
	
function likeFour() {
	if (document.getElementById('liked4').style.display === 'none') 
	{
		document.getElementById('liked4').style.display = 'block';
		}
		document.getElementById('lb4').style.backgroundColor="lightblue";
	}
	
function addF() {
	
	if(document.getElementById("addfr").innerHTML === "Add Friend")
	{
	document.getElementById("addfr").innerHTML = "👥️Requested";
	document.getElementById("addfr").style.backgroundColor = "gray";
	alert('Friend request sent.')
	}
	else
       {
		document.getElementById("addfr").innerHTML = "Add Friend";
		document.getElementById("addfr").style.backgroundColor = "blue";
		}
	}
	
function follo() {
	if(document.getElementById("flw").innerHTML === "Follow")
	{
	document.getElementById("flw").innerHTML = "Following";
	document.getElementById("flw").style.backgroundColor = "gray";
	alert('Now following.')
	}
	else
       {
		document.getElementById("flw").innerHTML = "Follow";
		document.getElementById("flw").style.backgroundColor = "blue";
		}
	}
	