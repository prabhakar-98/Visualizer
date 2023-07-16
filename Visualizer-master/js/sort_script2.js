let box_container = document.getElementById("box_container");
let rangeBox = document.getElementById("rangeBox");
let randomize_Array_box = document.getElementById("randomize_array_btn_box");
let sort_btn_box = document.getElementById("sort_btn_box");
let speedBox = document.getElementById("speedBox");
let createArray = document.getElementById("createArray");
let arrayBox = document.getElementById("arrayBox");
let algoBox = document.getElementById("sorting_algos_box");
let home1 = document.getElementById("home1");
let gfd = document.getElementsByTagName('table');
let jab = true;
let isrunning = false;
let parents = document.getElementsByClassName("parent");
let randColor;


let sortTypeBox = "";
let totalbox = rangeBox.value;
let minValue = 0;
let maxValue = 80;
let s = speedBox.value;



let un_array = new Array(totalbox);

algoBox.addEventListener("change", function () {
    parents[0].innerHTML = "";
    sortTypeBox = algoBox.value;


    if (sortTypeBox == "bubbleBox" || sortTypeBox == "heapBox" || sortTypeBox == "insertionBox"|| sortTypeBox =="quickBox") {
        jab = false;
        updatemerge();
        isrunning = false;
        parents[0].style.display = "flex";
        displaybar();
    }

    if (sortTypeBox == "mergeBox") {
        parents[0].style.display = "none";
    }
})

// createArray.addEventListener("click", function () {
//     let str = arrayBox.value;
//     if (str.length != 0)
//         toArray(str);
// })

function toArray(str) {
    str = str.split(",");
    for (x in str) {
        un_array[x] = parseFloat(str[x]);
    }

    if (un_array.length > 16) {
        alert("max array size: 15");
        arrayBox.value = "";
    }
    else {

        flag = true;
        s = speedBox.value;
        box_container.innerHTML = "";
        renderBoxes(un_array);

    }

}

function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createRandomarray() {
    //   gfd[0].style.display="none";
    for (let i = 0; i < totalbox; i++) {
        un_array[i] = randomnum(minValue, maxValue);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createRandomarray();
    renderBoxes(un_array);
});


function renderBoxes(array) {
    for (let i = 0; i < array.length; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.innerText = array[i];
        box_container.appendChild(box);
    }

}

async function updateBox() {
    parents[0].innerHTML = "";
    isrunning = false;
    flag = true;
    s = speedBox.value;
    totalbox = rangeBox.value;
    un_array = new Array(totalbox);
    createRandomarray();
    box_container.innerHTML = "";



    jab = false;
    updatemerge();








    renderBoxes(un_array);


}

function updatemerge() {


    for (let e = 0; e < gfd.length; e++) {
        // console.log(gfd[e]);
        gfd[e].innerHTML = "";
        gfd[e].remove();
    }

    for (let e = 0; e < gfd.length; e++) {
        // console.log(gfd[e]);
        gfd[e].innerHTML = "";
        gfd[e].remove();
    }

    for (let e = 0; e < gfd.length; e++) {
        // console.log(gfd[e]);
        gfd[e].innerHTML = "";
        gfd[e].remove();
    }
    gfd.innerText = "";
}

randomize_Array_box.addEventListener("click", function () {
    updateBox();
});

rangeBox.addEventListener("input", function () {
    updateBox();
})

speedBox.addEventListener("change", function () {
    s = speedBox.value;
})

function sleepBox(s) {
    return new Promise((resolve) => setTimeout(resolve, s));
}


function displaybar() {

    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    randColor = randomNumber.padStart(6, 0);

    for (let i = 0; i < un_array.length; i++) {
        let inner = document.createElement("div");
        inner.style.height = (un_array[i] * 6 + 'px');
        inner.style.color = "black";
        inner.style.backgroundColor = '#' + randColor;
        inner.style.width = 50 + 'px'
        inner.setAttribute('id', 'eme' + i);
        let a = un_array[i];
        let text = document.createTextNode(a);
        inner.appendChild(text);


        parents[0].appendChild(inner);
    }

}



function swapheight(j,k) {
    let a = document.getElementById('eme' + j);

    let b = document.getElementById('eme' + (k));
    let h1 = a.clientHeight;
    let h2 = b.clientHeight;
    let n1 = a.innerHTML;
    a.innerHTML = b.innerHTML;
    b.innerHTML = n1;
    // let bg1 = a.style.backgroundColor;
    // let bg2 = b.style.backgroundColor;

    // a.style.backgroundColor = bg2;
    // b.style.backgroundColor = bg1;

    a.style.height = h2 + 'px';
    b.style.height = h1 + 'px';

}


// Bubble sort Box-----------------------------------------------------

//bubble sort algorithm ----------------------------------------------------------------------------------------
async function bubbleSortBox(array) {
    bubblesort(array);

    async function bubblesort(array) {
        let i, j;

        for (i = 0; i < array.length; i++) {


            for (j = 0; j < (array.length - i - 1); j++) {
                document.getElementById('eme' + (j)).style.backgroundColor = "yellow";
                document.getElementById('eme' + (j + 1)).style.backgroundColor = "yellow";
                await sleepBox(550);

                if (array[j] > array[j + 1]) {
                    swap(array, j);
                    swapheight(j,j+1);
                    await sleepBox(550);
                }
                document.getElementById('eme' + (j)).style.backgroundColor ='#' + randColor;
                document.getElementById('eme' + (j + 1)).style.backgroundColor = '#' + randColor;
            }
            await sleepBox(550);
        }
    }

    function swap(array, j) {
        let p = array[j];
        array[j] = array[j + 1];
        array[j + 1] = p;
    }


}


//----------------------------------------------------------------------------------------------------------------

//insertion sort algorithm----------------------------------------------------------------------------------------

async function insertionSortBox(array) {
    let box = document.getElementsByClassName("box");

    for (let i = 1; i < array.length; i++) {
        let key = array[i];

        let j = i - 1;

        for (let k = 0; k <= j; k++) {
            document.getElementById('eme' + k).style.backgroundColor = "yellow";
        }
        await sleepBox(s);

        while (j >= 0 && array[j] > key) {
            document.getElementById('eme' + (j + 1)).style.backgroundColor = "red";
            await sleepBox(s);
            let f = array[j + 1]
            array[j + 1] = array[j];
            array[j] = f;
            swapheight(j,j+1);
            j = j - 1;
        }

        for (let k = 0; k <= j; k++) {
            document.getElementById('eme' + k).style.backgroundColor = '#' + randColor;
        }
       

        await sleepBox(s);
    }

   

    return array;

}
//------------------------------------------------------------------------------------------------------------------


//heap sort---------------------------------------------------------------------------------------------------------

async function heapSortBox(array) {
    let box = document.getElementsByClassName("box");
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        document.getElementById('eme' + i).style.backgroundColor = "yellow";
        await heapBox(array, array.length, i);

        document.getElementById('eme' + i).style.backgroundColor = '#'+randColor;

    }
    for (let i = array.length - 1; i >= 0; i--) {

        await swapBox(array, 0, i, box);
        await heapBox(array, i, 0);
    }
    for (let k = 0; k < box.length; k++) {
        document.getElementById('eme' + k).style.backgroundColor = '#' + randColor;
        await sleepBox(s);
    }
    return array;
}

async function heapBox(array, n, i) {
    let box = document.getElementsByClassName("box");
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    document.getElementById('eme' + largest).style.backgroundColor = "yellow";
    if (left < array.length)
    document.getElementById('eme' + left).style.backgroundColor = "pink";

    if (right < array.length)
    document.getElementById('eme' + right).style.backgroundColor = "pink";

    await sleepBox(s);

    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }
    if (largest != i) {
        await swapBox(array, i, largest, box);
        await heapBox(array, n, largest);
    }

    if (left < array.length)
    document.getElementById('eme' + left).style.backgroundColor = '#' + randColor;

    if (right < array.length)
    document.getElementById('eme' + right).style.backgroundColor = '#' + randColor;

}

async function swapBox(array, i, j, box) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    document.getElementById('eme' + i).style.backgroundColor = "red";
    document.getElementById('eme' + j).style.backgroundColor = "red";
    await sleepBox(s);
    swapheight(i,j);

    // document.getElementById('eme' + i).innerHTML = array[i];
    // document.getElementById('eme' + j).innerHTML = array[j];


    await sleepBox(s);
    for (let k = 0; k < box.length; k++) {
        //   if (k != i && k != j) {
            document.getElementById('eme' + k).style.backgroundColor = '#' + randColor;
        //   }
    }
    return array;
}


//--------------------------------------------------------------------------

//merge sort--------------------------------------------------------------------------------------------------------------------------------------


async function mergeSortBox(array) {
    isrunning = true;
    // while (jab) {

    //   gfd[0].style.display="block";
    let gf = 'em' + 1;

    let t = 0;
    let count = 1


    maketable(0, array.length - 1, gf, 1);

    let p = 0;
    let r = 'em' + 2;

    // const sleep = (time) => {
    //     return new Promise(resolve => setTimeout(resolve, time))
    // }
    mergeSort(array, 0, array.length - 1, count);


    async function mergeSort(array, s, e, count) {
        //base case
        if (jab == false) return;
        await changecolor(count);
        if (s >= e) {
            return;
        }
        // console.log(count);
        let mid = Math.floor((s + e) / 2);
        // p = p + 1;

        // gf = 'em' + p;

        await sleepBox(500);
        maketable(s, mid, 'em' + (2 * count), (2 * count));
        await sleepBox(500);
        p = p + 1;
        gf = 'em' + p;

        maketable(mid + 1, e, 'em' + (2 * count + 1), (2 * count + 1));

        //left part sort karna h 

        await mergeSort(array, s, mid, 2 * count);


        //right part sort karna h 
        await mergeSort(array, mid + 1, e, 2 * count + 1);


        //merge
        await merge(array, s, mid, e, count);
        return;

    }

    async function merge(array, l, m, r, hog) {
        if (jab == false) return;
        // console.log(hog);
        var n1 = m - l + 1;
        var n2 = r - m;

        let remove = document.getElementById('w' + hog).childNodes;
        //  console.log(remove[0].innerText);
        remove.forEach(li => {
            li.innerText = ""
        });

        await sleepBox(500);





        // Create temp arrays
        var L = new Array(n1);
        var R = new Array(n2);

        // Copy data to temp arrays L[] and R[]
        for (var i = 0; i < n1; i++)
            L[i] = array[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = array[m + 1 + j];

        // Merge the temp arrays back into arr[l..r]

        // Initial index of first subarray
        var i = 0;

        // Initial index of second subarray
        var j = 0;

        // Initial index of merged subarray
        var k = l;
        let v = 0;

        let ar1 = document.getElementById('w' + (2 * hog));
        let ar2 = document.getElementById('w' + (2 * hog + 1));
        //   console.log(ar1.childNodes[0].innerText);

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                array[k] = L[i];
                ar1.childNodes[i].innerText = "";
                remove[v].innerText = array[k];
                await sleepBox(500);

                i++;
            }
            else {
                array[k] = R[j];
                ar2.childNodes[j].innerText = "";
                remove[v].innerText = array[k];
                await sleepBox(500);

                j++;
            }

            v++;
            k++;
        }

        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            array[k] = L[i];
            ar1.childNodes[i].innerText = "";
            remove[v].innerText = array[k];

            await sleepBox(500);
            v++;
            i++;
            k++;
        }

        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            array[k] = R[j];
            remove[v].innerText = array[k];
            ar2.childNodes[0].innerText = ""
            await sleepBox(500);
            v++;
            j++;
            k++;
        }
        //     let v=0;
        //    remove.forEach(trav=>{
        //     trav.innerText=arr[l+v];
        //     v++;
        //    });


        ar1.remove();
        ar2.remove();


    }

    async function changecolor(c) {
        if (jab == false) return;
        let tablback = document.getElementById('w' + c);
        tablback.style.backgroundColor = "#00FF00";
        await sleepBox(500);
        tablback.style.backgroundColor = "antiquewhite";
    }

    function maketable(star, n, bood, index) {

        if (jab == true) {


            let tabled = document.createElement('table');
            //    console.log(index);
            tabled.setAttribute('id', 'w' + index);

            for (let i = star; i <= n; i++) {
                let innerdata = document.createElement('td');
                let text = document.createTextNode(array[i]);
                innerdata.appendChild(text);
                tabled.appendChild(innerdata);
                let lk = document.getElementById(bood);

                lk.appendChild(tabled);
            }
        }
    }




    if (jab == false) return;




}

//--------------------------------------------------------------------------------------------------------------------------------


//quick sort----------------------------------------------------------------------------------------------------------------------


async function qswapBox(array, leftIndex, rightIndex, box) {
  
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
    document.getElementById('eme' + (leftIndex)).style.backgroundColor = "red";
    document.getElementById('eme' + (rightIndex)).style.backgroundColor = "red";

    await sleepBox(s);
     swapheight(leftIndex, rightIndex)
    // box[leftIndex].innerHTML = array[leftIndex];
    // box[rightIndex].innerHTML = array[rightIndex];

    await sleepBox(s);

    // box[leftIndex].style.backgroundColor = "antiquewhite";
    // box[rightIndex].style.backgroundColor = "antiquewhite";

}

async function partitionBox(array, start, end) {
    let box = document.getElementsByClassName("box");

    let pivot = array[start];

    document.getElementById('eme' + (start)).style.backgroundColor = "pink";

    await sleepBox(s);

    let count = 0;

    for (let i = start + 1; i <= end; i++) {
        if (array[i] <= pivot) {
            count++;
        }
    }

    let pivotIndex = start + count;

    if (count != 0) {
        document.getElementById('eme' + (pivotIndex)).style.backgroundColor = "yellow";
        await sleepBox(s);
        qswapBox(array, start, pivotIndex, box);
    }

    let i = start, j = end;

    while (i < pivotIndex && j > pivotIndex) {

        while (array[i] <= pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }
        if (i < pivotIndex && j > pivotIndex) {
            qswapBox(array, i, j, box);
            i++;
            j--;
        }
    }

    //await sleepBox(s);
    //box[pivotIndex].style.backgroundColor = "green";
    return pivotIndex;

}

async function quickSortBox(array, start, end) {

    if (start >= end)
        return;
    let p = await partitionBox(array, start, end);
    await quickSortBox(array, start, p - 1);
    await quickSortBox(array, p + 1, end);

}

//-------------------------------------------------------------------------------------------------------------------------------------


sort_btn_box.addEventListener("click", function () {


    if (!isrunning) {
        switch (sortTypeBox) {
            case "bubbleBox":
                bubbleSortBox(un_array);
                break;
            case "insertionBox":
                insertionSortBox(un_array);
                break;
            case "heapBox":
                heapSortBox(un_array);
                break;
            case "mergeBox":
                {
                    jab = true;
                    mergeSortBox(un_array);
                    break;
                }
            case "quickBox":
                quickSortBox(un_array, 0,un_array.length - 1);
                break;

        }
    }
});




home1.addEventListener("click", function () {
    window.location.href = "index.html";
})