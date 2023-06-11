
const draggalbe = document.querySelectorAll('.dragable');
const container = document.querySelectorAll('.container');


draggalbe.forEach(d => {
   
   d.addEventListener('dragstart',(e) => {
      e.target.classList.add('dragging')
   })

   d.addEventListener('dragend',(e) => {
      e.target.classList.remove('dragging')

      alert("Item dragged");
      
   })

})

// append the element over the container it is put on
container.forEach(c => {
   c.addEventListener('dragover', (e)=>{
       e.preventDefault();
       const dragable = document.querySelector('.dragging')
       c.appendChild(dragable);
   })
})


// custom comparator for sort fuction
    function comparator(a, b) {
        if (a.dataset.index < b.dataset.index)
            return -1;
        if (a.dataset.index > b.dataset.index)
            return 1;
        return 0;
    }

    // this is used to put the elements in its original position
    function SortData() {
       const container1 = document.querySelector('.container1')

        var indexes = container1.querySelectorAll("[data-index]");
        var indexesArray = Array.from(indexes);
        console.log(indexesArray);
        
        let sorted = indexesArray.sort(comparator);

        sorted.forEach(e =>
            document.querySelector(".container1").appendChild(e));
    }
    
  
   //  when we click reset this function is called to reset the containers
    function myFuction(){
        
       const container1 = document.querySelector('.container1')

       const container2 = document.querySelector('.container2');

         while (container2.hasChildNodes()) {
            container1.appendChild(container2.firstChild);
        }

        SortData();

    }