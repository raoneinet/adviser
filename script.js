document.querySelector("form").addEventListener("submit", async (event)=>{
    event.preventDefault()

    let input = document.querySelector("input").value
    let res = document.querySelector(".advice ul")
    res.innerHTML = ''
    

    if(input !== ''){

      let urlReq = `https://api.adviceslip.com/advice/search/${encodeURI(input)}`
      let searchAdvice = await fetch(urlReq)
      let json = await searchAdvice.json()
        
      for(let i=0; i < json.slips.length; i++){
        res.innerHTML += `<li>${json.slips[i].advice}</li>`
      }
      
    }else{
      warning("É Necessário preencher o campo de busca")
    }
  })

  function warning(msg){
    alert(msg)
  }