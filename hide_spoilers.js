dict = ['Brooklyn Nine Nine', 'B99', 'b99 spoiler', 'B99 Spoiler', 'b99 Season 8 Spoiler', 'B99 Season 8', 'Brooklyn Nine-Nine Season 8', 
'Jake Peralta', 'Amy Santiago', 'Season 8', 'Raymond Holt', 'Terry Jeffords', 'Charles Boyle', 'Rosa Diaz', 'Gina Linetti', 
'Brooklyn99 Season 8', '#Brookln99', 'Brooklyn Nine-Nine', '#b99', 'Brooklyn 99']


count = 0;

for(var i = 0; i < dict.length; i++)
{
	o = $(`:contains(${dict[i]}):not(:has(:contains(${dict[i]})))`)
	for(var j = 0; j < o.length; j++)
	{
		if (!o[j].parentNode || o[j].parentNode.nodeName === "BODY") {
          continue;
        }

		hideSpoiler(o[j]);
		count++;
	}
}

if(count >= 10) {

	headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");	

	for(var i = 0; i < headings.length; i++) 
    hideNode(headings[i]);

}

function hideSpoiler(ele) {
	ancestor = ele.parentNode;

	if(ancestor != null) {
		if (ancestor.parentNode != null && ancestor.nodeName != 'BODY')
				ancestor = ancestor.parentNode;	

		imgs = ancestor.getElementsByTagName('img');

		for(var i = 0; i < imgs.length; i++) 
			imgs[i].style.webkitFilter = "blur(10px)";

		names = ancestor.getElementsByTagName('li');
		
		for(var i = 0; i < names.length; i++)
			hideNode(names[i]);
	}

	if (ele == null || ele.parentNode == null) 
	return;

	all_child = ele.parentNode.children;

	for(var i = 0; i < all_child; i++) {
		
		var type = all_child[i].nodeName;

		if (tags.match(type) != null) 
		hideNode(all_child[i]);
	}
	hideNode(ele);
}

function hideNode(ele) {
	ele.textContent = '[SPOILER DETECTED!!]';
	ele.style.color = 'black'
}