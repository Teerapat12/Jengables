const tileIdInput = $("#tileId");
const rulesText = $("#rules");
const rulesNumber = $("#rulesNumber");
const rulesTitle = $("#rulesTitle");
const rulesDesc = $("#rulesDesc");


function onSelectJenga(e){
  e.preventDefault();

  const selectedTile = parseInt(tileIdInput.val());

  if(selectedTile>0 && selectedTile<=108){
    rulesNumber.text(selectedTile);
    rulesTitle.text(jengables[selectedTile*3-2]);
    rulesDesc.text(jengables[selectedTile*3-1]);
  }
  else {
    rulesNumber.text("Not found");
    rulesTitle.text("There are only 1 - 108.");
    rulesDesc.text("Are you drunk???");
  }

  tileIdInput.val("");
}


//init
$("#inputPanel").submit(onSelectJenga);