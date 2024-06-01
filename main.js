/* a = bos
   e = hlf
   c = bok
   o = bokk
   d = bks
   t = bs
   n = helf
  // aa = helfs
   u = hl
   r = bhl
   i = bkls

*/

(()=>{
    let hlf = [];
        /*start searching*/
    function bos() {
        !function(hlf) {
            localStorage.setItem("books", JSON.stringify(hlf))
        }(hlf),
        bok(hlf)
    }
    window.addEventListener("load", (function() {
        hlf = JSON.parse(localStorage.getItem("books")) || [],
        bok(hlf);
        const bokk = document.querySelector("#inputBook")
          , bks = document.querySelector("#searchBook");
        bokk.addEventListener("submit", bs),
        bks.addEventListener("submit", helf),
        document.addEventListener("bookChanged", bos)
    }
    ))
    
        function helf(bs) {
        bs.preventDefault();
        const helf = document.querySelector("#searchBookTitle");
        query = helf.value,
        query ? bok(hlf.filter((function(hlf) {
            return hlf.title.toLowerCase().includes(query.toLowerCase())
        }
        ))) : bok(hlf)
    }
    /*end searching*/
    
    function bokk(bs) {
        const helf = Number(bs.target.id)
          , bokk = hlf.findIndex((function(hlf) {
            return hlf.id === helf
        }
        ));
        -1 !== bokk && (hlf[bokk] = {
            ...hlf[bokk],
            isComplete: !0
        },
        document.dispatchEvent(new Event("bookChanged")))
    }
    function bks(bs) {
        const helf = Number(bs.target.id)
          , bokk = hlf.findIndex((function(hlf) {
            return hlf.id === helf
        }
        ));
        -1 !== bokk && (hlf[bokk] = {
            ...hlf[bokk],
            isComplete: !1
        },
        document.dispatchEvent(new Event("bookChanged")))
    }
    function bkls(bs) {
        const helf = Number(bs.target.id)
          , bokk = hlf.findIndex((function(hlf) {
            return hlf.id === helf
        }
        ));
        -1 !== bokk && (hlf.splice(bokk, 1),
        document.dispatchEvent(new Event("bookChanged")))
    }
    
    /*start data buku*/
    function bok(hlf) {
        const bs = document.querySelector("#incompleteBookshelfList")
          , helf = document.querySelector("#completeBookshelfList");
        bs.innerHTML = "",
        helf.innerHTML = "";
        for (const bok of hlf) {
            const hlf = document.createElement("article");
            hlf.classList.add("book_item");
            const bos = document.createElement("h2");
            bos.innerText = bok.title;
            const hl = document.createElement("p");
            hl.innerText = "Penulis: " + bok.author;
            const bhl = document.createElement("p");
            if (bhl.innerText = "Tahun: " + bok.year,
            hlf.appendChild(bos),
            hlf.appendChild(hl),
            hlf.appendChild(bhl),
            bok.isComplete) {
                const bs = document.createElement("div");
                bs.classList.add("action");
                const bokk = document.createElement("button");
                bokk.id = bok.id,
                bokk.innerText = "Belum Selesai dibaca",
                bokk.classList.add("green"),
                bokk.addEventListener("click", bks);
                const bos = document.createElement("button");
                bos.id = bok.id,
                bos.innerText = "Hapus",
                bos.classList.add("red"),
                bos.addEventListener("click", bkls),
                bs.appendChild(bokk),
                bs.appendChild(bos),
                hlf.appendChild(bs),
                helf.appendChild(hlf)
            } else {
                const helf = document.createElement("div");
                helf.classList.add("action");
                const bks = document.createElement("button");
                bks.id = bok.id,
                bks.innerText = "Selesai dibaca",
                bks.classList.add("green"),
                bks.addEventListener("click", bokk);
                const bos = document.createElement("button");
                bos.id = bok.id,
                bos.innerText = "Hapus",
                bos.classList.add("red"),
                bos.addEventListener("click", bkls),
                helf.appendChild(bks),
                helf.appendChild(bos),
                hlf.appendChild(helf),
                bs.appendChild(hlf)
            }
        }
    }
    
    /*end data buku*/
    
    
    /*start input*/
        function bs(bs) {
    bs.preventDefault();
    const helf = document.querySelector("#inputBookTitle")
    , bokk = document.querySelector("#inputBookAuthor")
    , bks = document.querySelector("#inputBookYear")
    , bkls = document.querySelector("#inputBookIsComplete")
    , bok = {
        id: +new Date,
        title: helf.value,
        author: bokk.value,
        year: Number(bks.value), // mengubah nilai menjadi bertipe number
        isComplete: bkls.checked
    };
    console.log(bok),
    hlf.push(bok),
    document.dispatchEvent(new Event("bookChanged"))
}
    
    /*end input*/

}
)();

