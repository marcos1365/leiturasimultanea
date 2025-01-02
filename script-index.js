document.addEventListener("contextmenu", e => e.preventDefault()); //desabilitar botão direito do mouse na página

var lopcao1=window.document.getElementById('lopcao1') //Mostra o úmero de vezes que o livro foi escolhido
var img1=window.document.getElementById('a1') //Imagem do livro
var lopcao2=window.document.getElementById('lopcao2')
var img2=window.document.getElementById('a2')
var lopcao3=window.document.getElementById('lopcao3')
var img3=window.document.getElementById('a3')
var lopcao4=window.document.getElementById('lopcao4')
var img4=window.document.getElementById('a4')
var lopcao5=window.document.getElementById('lopcao5')
var img5=window.document.getElementById('a5')


var lopcao6=window.document.getElementById('lopcao6')
var img6=window.document.getElementById('a6')
var lopcao7=window.document.getElementById('lopcao7')
var img7=window.document.getElementById('a7')
var lopcao8=window.document.getElementById('lopcao8')
var img8=window.document.getElementById('a8')
var lopcao9=window.document.getElementById('lopcao9')
var img9=window.document.getElementById('a9')
var lopcao10=window.document.getElementById('lopcao10')
var img10=window.document.getElementById('a10')


var fullscreen=window.document.getElementById('full')

var recarregar=window.document.getElementById('atualizar')

var numero = window.document.getElementById('num')
var bgmodalnumero=window.document.getElementById('bgmodalnumero')
var fecharnumero=window.document.getElementById('fecharnumero')
var numeroMaximoAlunos=window.document.getElementById('numeroalunos')
var botaoOk=window.document.getElementById('botaook')

var totalAlunos=window.document.getElementById('total')
var numeroTotalAlunos=window.document.getElementById('numerototal')
var botaoOkTotal=window.document.getElementById('botaooktotal')
var fecharTotal=window.document.getElementById('fechartotal')

var apagar=window.document.getElementById('apagar')
var bgmodalApagar=window.document.getElementById('bgmodalapagar')
var fecharApagarSomatoria=window.document.getElementById('fecharapagar')
var botaoOkApagar=window.document.getElementById('botaookapagar')

var alterar=window.document.getElementById('alterar')
var bgModalAlterar=window.document.getElementById('bgModalAlterar')
var fecharAlterarImagens=window.document.getElementById('fecharAlterar')
var botaoOkAlterar=window.document.getElementById('botaoOkAlterar')
const livro1=window.document.getElementById('livro1')
const arquivo1=window.document.getElementById('arquivo1')
const livro2=window.document.getElementById('livro2')
const arquivo2=window.document.getElementById('arquivo2')
const livro3=window.document.getElementById('livro3')
const arquivo3=window.document.getElementById('arquivo3')
const livro4=window.document.getElementById('livro4')
const arquivo4=window.document.getElementById('arquivo4')
const livro5=window.document.getElementById('livro5')
const arquivo5=window.document.getElementById('arquivo5')
const livro6=window.document.getElementById('livro6')
const arquivo6=window.document.getElementById('arquivo6')
const livro7=window.document.getElementById('livro7')
const arquivo7=window.document.getElementById('arquivo7')
const livro8=window.document.getElementById('livro8')
const arquivo8=window.document.getElementById('arquivo8')
const livro9=window.document.getElementById('livro9')
const arquivo9=window.document.getElementById('arquivo9')
const livro10=window.document.getElementById('livro10')
const arquivo10=window.document.getElementById('arquivo10')

var informacoes=window.document.getElementById('info')
var bgmodalinfo=window.document.getElementById('bgmodalinfo')
var fecharInformacoes=window.document.getElementById('fecharinfo')

//Adcionando eventos de clicar nas imagens e nos números
img1.addEventListener('click',livro1Imagem)
lopcao1.addEventListener('click',livro1menosImagem)
img2.addEventListener('click',livro2Imagem)
lopcao2.addEventListener('click',livro2menosImagem)
img3.addEventListener('click',livro3Imagem)
lopcao3.addEventListener('click',livro3menosImagem)
img4.addEventListener('click',livro4Imagem)
lopcao4.addEventListener('click',livro4menosImagem)
img5.addEventListener('click',livro5Imagem)
lopcao5.addEventListener('click',livro5menosImagem)

img6.addEventListener('click',livro6Imagem)
lopcao6.addEventListener('click',livro6menosImagem)
img7.addEventListener('click',livro7Imagem)
lopcao7.addEventListener('click',livro7menosImagem)
img8.addEventListener('click',livro8Imagem)
lopcao8.addEventListener('click',livro8menosImagem)
img9.addEventListener('click',livro9Imagem)
lopcao9.addEventListener('click',livro9menosImagem)
img10.addEventListener('click',livro10Imagem)
lopcao10.addEventListener('click',livro10menosImagem)

//Adicionando eventos para os botões na barra, canto superior direito
fullscreen.addEventListener('click', toggleFullScreen)
recarregar.addEventListener('click', redefinir)
numero.addEventListener('click',abrirNumeroMaximo)
fecharnumero.addEventListener('click',fecharNumeroMaximo)

totalAlunos.addEventListener('click', abrirNumeroTotal)
fecharTotal.addEventListener('click',fecharNumeroTotal)
botaoOk.addEventListener('click',alterarNumeroMaximoPorTurma)

apagar.addEventListener('click',abrirApagar)
fecharApagarSomatoria.addEventListener('click',fecharApagar)
botaoOkApagar.addEventListener('click', apagarSomatoria )

alterar.addEventListener('click', abrirAlterar)
fecharAlterarImagens.addEventListener('click',fecharAlterar)

botaoOkTotal.addEventListener('click',alterarNumeroMaximoTotal)
informacoes.addEventListener('click', abrirInfo)
fecharInformacoes.addEventListener('click', fecharInfo)



//contador de cada livro
var a,b,c,d,e,f,g,h,i,j

//Número máximo de alunos por livro de uma mesma sala
var maximo
//Número total de alunos por livro
var total

function iniciar() { 
    a=0;b=0;c=0;d=0;e=0; 
    f=0;g=0;h=0;i=0;j=0;
    total=parseInt(localStorage.getItem("total"))
    if(total==NaN){
        total=25
        localStorage.setItem("total",""+25)
    }
    maximo=3
    //total=25
    apagarTotalAlunosPorLivro()
   //apagarLocalStorage() //teste
    
}
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
}
function atualizar(){window.location.reload(true);}

function redefinir(){
    a=0;b=0;c=0;d=0;e=0; 
    f=0;g=0;h=0;i=0;j=0;
    lopcao1.innerText=a;lopcao2.innerText=b;lopcao3.innerText=c;lopcao4.innerText=d;lopcao5.innerText=e;
    lopcao6.innerText=f;lopcao7.innerText=g;lopcao8.innerText=h;lopcao9.innerText=i;lopcao10.innerText=j;
    ligarImagemA(); ligarImagemB(); ligarImagemC(); ligarImagemD(); ligarImagemE(); 
    ligarImagemF(); ligarImagemG(); ligarImagemH(); ligarImagemI(); ligarImagemJ(); 
    img1.style.filter='grayscale(0)'; img1.style.opacity='1'; lopcao1.style.color='black'
    img2.style.filter='grayscale(0)'; img2.style.opacity='1'; lopcao2.style.color='black'
    img3.style.filter='grayscale(0)'; img3.style.opacity='1'; lopcao3.style.color='black'
    img4.style.filter='grayscale(0)'; img4.style.opacity='1'; lopcao4.style.color='black'
    img5.style.filter='grayscale(0)'; img5.style.opacity='1'; lopcao5.style.color='black'
    img6.style.filter='grayscale(0)'; img6.style.opacity='1'; lopcao6.style.color='black'
    img7.style.filter='grayscale(0)'; img7.style.opacity='1'; lopcao7.style.color='black'
    img8.style.filter='grayscale(0)'; img8.style.opacity='1'; lopcao8.style.color='black'
    img9.style.filter='grayscale(0)'; img9.style.opacity='1'; lopcao9.style.color='black'
    img10.style.filter='grayscale(0)'; img10.style.opacity='1'; lopcao10.style.color='black'
    //Se o contador/número armazenado for maior ou igual ao total, o livro fica indisponível
    if(parseInt(localStorage.getItem("a"))>=total){
        img1.style.filter='grayscale(1)'
        img1.style.opacity='0.03'
        lopcao1.style.color='red' 
        img1.removeEventListener('click',livro1Imagem)
        lopcao1.removeEventListener('click',livro1menosImagem)
    }
    if(parseInt(localStorage.getItem("b"))>=total){
        img2.style.filter='grayscale(1)'
        img2.style.opacity='0.03'
        lopcao2.style.color='red' 
        img2.removeEventListener('click',livro2Imagem)
        lopcao2.removeEventListener('click',livro2menosImagem)
    }
    if(parseInt(localStorage.getItem("c"))>=total){
        img3.style.filter='grayscale(1)'
        img3.style.opacity='0.03'
        lopcao3.style.color='red' 
        img3.removeEventListener('click',livro3Imagem)
        lopcao3.removeEventListener('click',livro3menosImagem)
    }
    if(parseInt(localStorage.getItem("d"))>=total){
        img4.style.filter='grayscale(1)'
        img4.style.opacity='0.03'
        lopcao4.style.color='red' 
        img4.removeEventListener('click',livro4Imagem)
        lopcao4.removeEventListener('click',livro4menosImagem)
    }
    if(parseInt(localStorage.getItem("e"))>=total){
        img5.style.filter='grayscale(1)'
        img5.style.opacity='0.03'
        lopcao5.style.color='red' 
        img5.removeEventListener('click',livro5Imagem)
        lopcao5.removeEventListener('click',livro5menosImagem)
    }
    if(parseInt(localStorage.getItem("f"))>=total){
        img6.style.filter='grayscale(1)'
        img6.style.opacity='0.03'
        lopcao6.style.color='red' 
        img6.removeEventListener('click',livro6Imagem)
        lopcao6.removeEventListener('click',livro6menosImagem)
    }
    if(parseInt(localStorage.getItem("g"))>=total){
        img7.style.filter='grayscale(1)'
        img7.style.opacity='0.03'
        lopcao7.style.color='red' 
        img7.removeEventListener('click',livro7Imagem)
        lopcao7.removeEventListener('click',livro7menosImagem)
    }
    if(parseInt(localStorage.getItem("h"))>=total){
        img8.style.filter='grayscale(1)'
        img8.style.opacity='0.03'
        lopcao8.style.color='red' 
        img8.removeEventListener('click',livro8Imagem)
        lopcao8.removeEventListener('click',livro8menosImagem)
    }
    if(parseInt(localStorage.getItem("i"))>=total){
        img9.style.filter='grayscale(1)'
        img9.style.opacity='0.03'
        lopcao9.style.color='red' 
        img9.removeEventListener('click',livro9Imagem)
        lopcao9.removeEventListener('click',livro9menosImagem)
    }
    if(parseInt(localStorage.getItem("j"))>=total){
        img10.style.filter='grayscale(1)'
        img10.style.opacity='0.03'
        lopcao10.style.color='red' 
        img10.removeEventListener('click',livro10Imagem)
        lopcao10.removeEventListener('click',livro10menosImagem)
    }
}
function abrirNumeroMaximo(){bgmodalnumero.style.display='block';  }
function fecharNumeroMaximo(){bgmodalnumero.style.display='none'}
function abrirNumeroTotal(){bgmodaltotal.style.display='block';  }
function fecharNumeroTotal(){bgmodaltotal.style.display='none'}
function abrirApagar(){bgmodalApagar.style.display='block'; }
function fecharApagar(){bgmodalApagar.style.display='none';}
function abrirAlterar(){bgModalAlterar.style.display='block' }
function fecharAlterar(){bgModalAlterar.style.display='none'}
function abrirInfo(){ bgmodalinfo.style.display='block'  }
function fecharInfo(){bgmodalinfo.style.display='none'}


function alterarNumeroMaximoPorTurma(){
    
    if(numeroMaximoAlunos.value.length==0){
        window.document.getElementById('numeroalunos').focus(); 
    }
    else{
        maximo=numeroMaximoAlunos.value
        if(maximo>total){
            alert("O número máximo de alunos por livro de cada turma não pode ser maior que o número total de alunos por livro. O valor total atual é: "+total+".")
            window.document.getElementById('numeroalunos').focus();
        }else{
            numeroMaximoAlunos.value.length==0
            redefinir()
            fecharNumeroMaximo()
        }

    }
}

function alterarNumeroMaximoTotal(){
    if(numeroTotalAlunos.value.length==0){
        window.document.getElementById('numerototal').focus(); 
    }
    else{
        let totalLocal=numeroTotalAlunos.value
        if(totalLocal<maximo){
            alert("O número total de alunos por livro não pode ser menor que o número máximo de alunos por livro de cada turma. O valor máximo atual é: "+maximo+".")
            window.document.getElementById('numerototal').focus(); 
        }else{
            localStorage.setItem("total",""+totalLocal)
            total=parseInt(localStorage.getItem("total"))
            redefinir()
            bgmodaltotal.style.display='none'
        }

    }

}
function apagarTotalAlunosPorLivro(){
    if(parseInt(localStorage.getItem("a"))>=total||parseInt(localStorage.getItem("b"))>=total||parseInt(localStorage.getItem("c"))>=total||parseInt(localStorage.getItem("d"))>=total||parseInt(localStorage.getItem("e"))>=total||parseInt(localStorage.getItem("f"))>=total||parseInt(localStorage.getItem("g"))>=total||parseInt(localStorage.getItem("h"))>=total||parseInt(localStorage.getItem("i"))>=total||parseInt(localStorage.getItem("j"))>=total||parseInt(localStorage.getItem("k"))>=total){
        let respostaApagarTotal=confirm('A "somatória" de alunos por livro atingiu o valor de: "total" de alunos por livro. O valor total de alunos atual é: '+localStorage.getItem("total")+". Deseja apagar a somatória de alunos?")
        if(respostaApagarTotal==true){
            localStorage.setItem("a","0");localStorage.setItem("b","0");localStorage.setItem("c","0");
            localStorage.setItem("d","0");localStorage.setItem("e","0");localStorage.setItem("f","0");
            localStorage.setItem("g","0");localStorage.setItem("h","0");localStorage.setItem("i","0");
            localStorage.setItem("j","0");
        }

    } //alert("a:"+a+" lsa:"+localStorage.getItem("a")+" ContadorA:"+contadorA+" total:"+total+" Apagar?"+respostaApagarTotal)
    
}
function apagarSomatoria(){
    
            localStorage.setItem("a","0");localStorage.setItem("b","0");localStorage.setItem("c","0");
            localStorage.setItem("d","0");localStorage.setItem("e","0");localStorage.setItem("f","0");
            localStorage.setItem("g","0");localStorage.setItem("h","0");localStorage.setItem("i","0");
            localStorage.setItem("j","0");
            fecharApagar()
        
}
function apagarLocalStorage(){
    localStorage.setItem("a","0");localStorage.setItem("b","0");localStorage.setItem("c","0");localStorage.setItem("d","0");
    localStorage.setItem("e","0");localStorage.setItem("f","0");localStorage.setItem("g","0");localStorage.setItem("h","0");
    localStorage.setItem("i","0");localStorage.setItem("j","0");
}
// Função para atualizar a imagem na modalAlterar
const previewImage = (input, modalImage) => {
    const file = input.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        modalImage.src = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecione apenas arquivos de imagem!');
      input.value = ''; // Limpar o campo caso o arquivo não seja imagem
    }
  };
// Atualizar as imagens na modalAlterar
arquivo1.addEventListener('change', () => previewImage(arquivo1, livro1));
arquivo2.addEventListener('change', () => previewImage(arquivo2, livro2));
arquivo3.addEventListener('change', () => previewImage(arquivo3, livro3));
arquivo4.addEventListener('change', () => previewImage(arquivo4, livro4));
arquivo5.addEventListener('change', () => previewImage(arquivo5, livro5));
arquivo6.addEventListener('change', () => previewImage(arquivo6, livro6));
arquivo7.addEventListener('change', () => previewImage(arquivo7, livro7));
arquivo8.addEventListener('change', () => previewImage(arquivo8, livro8));
arquivo9.addEventListener('change', () => previewImage(arquivo9, livro9));
arquivo10.addEventListener('change', () => previewImage(arquivo10, livro10));
// Salvar alterações
botaoOkAlterar.addEventListener('click', () => {
    const file1 = arquivo1.files[0];
    const file2 = arquivo2.files[0];
    const file3 = arquivo3.files[0];
    const file4 = arquivo4.files[0];
    const file5 = arquivo5.files[0];
    const file6 = arquivo6.files[0];
    const file7 = arquivo7.files[0];
    const file8 = arquivo8.files[0];
    const file9 = arquivo9.files[0];
    const file10 = arquivo10.files[0];
    if (file1) {img1.src = URL.createObjectURL(file1);}
    if (file2) {img2.src = URL.createObjectURL(file2);}
    if (file3) {img3.src = URL.createObjectURL(file3);}
    if (file4) {img4.src = URL.createObjectURL(file4);}
    if (file5) {img5.src = URL.createObjectURL(file5);}
    if (file6) {img6.src = URL.createObjectURL(file6);}
    if (file7) {img7.src = URL.createObjectURL(file7);}
    if (file8) {img8.src = URL.createObjectURL(file8);}
    if (file9) {img9.src = URL.createObjectURL(file9);}
    if (file10) {img10.src = URL.createObjectURL(file10);}
    bgModalAlterar.style.display = 'none';  
  });

function desligarImagemA(){ img1.removeEventListener('click',livro1Imagem);  }
function ligarImagemA(){ img1.addEventListener('click', livro1Imagem);}
function religarImagemA(){ desligarImagemA(); window.setTimeout(ligarImagemA,3000); window.setTimeout(removerClasseA,3000) }
function inserirClasseA(){ window.document.getElementById('imga').classList.add('escolhido')}
function removerClasseA(){ window.document.getElementById('imga').classList.remove('escolhido')}

function desligarImagemB(){ img2.removeEventListener('click',livro2Imagem);  }
function ligarImagemB(){ img2.addEventListener('click', livro2Imagem);}
function religarImagemB(){ desligarImagemB(); window.setTimeout(ligarImagemB,3000); window.setTimeout(removerClasseB,3000) }
function inserirClasseB(){ window.document.getElementById('imgb').classList.add('escolhido')}
function removerClasseB(){ window.document.getElementById('imgb').classList.remove('escolhido')}

function desligarImagemC(){ img3.removeEventListener('click',livro3Imagem);  }
function ligarImagemC(){ img3.addEventListener('click', livro3Imagem);}
function religarImagemC(){ desligarImagemC(); window.setTimeout(ligarImagemC,3000); window.setTimeout(removerClasseC,3000) }
function inserirClasseC(){ window.document.getElementById('imgc').classList.add('escolhido')}
function removerClasseC(){ window.document.getElementById('imgc').classList.remove('escolhido')}

function desligarImagemD(){ img4.removeEventListener('click',livro4Imagem);  }
function ligarImagemD(){ img4.addEventListener('click', livro4Imagem);}
function religarImagemD(){ desligarImagemD(); window.setTimeout(ligarImagemD,3000); window.setTimeout(removerClasseD,3000) }
function inserirClasseD(){ window.document.getElementById('imgd').classList.add('escolhido')}
function removerClasseD(){ window.document.getElementById('imgd').classList.remove('escolhido')}

function desligarImagemE(){ img5.removeEventListener('click',livro5Imagem);  }
function ligarImagemE(){ img5.addEventListener('click', livro5Imagem);}
function religarImagemE(){ desligarImagemE(); window.setTimeout(ligarImagemE,3000); window.setTimeout(removerClasseE,3000) }
function inserirClasseE(){ window.document.getElementById('imge').classList.add('escolhido')}
function removerClasseE(){ window.document.getElementById('imge').classList.remove('escolhido')}

function desligarImagemF(){ img6.removeEventListener('click',livro6Imagem);  }
function ligarImagemF(){ img6.addEventListener('click', livro6Imagem);}
function religarImagemF(){ desligarImagemF(); window.setTimeout(ligarImagemF,3000); window.setTimeout(removerClasseF,3000) }
function inserirClasseF(){ window.document.getElementById('imgf').classList.add('escolhido')}
function removerClasseF(){ window.document.getElementById('imgf').classList.remove('escolhido')}

function desligarImagemG(){ img7.removeEventListener('click',livro7Imagem);  }
function ligarImagemG(){ img7.addEventListener('click', livro7Imagem);}
function religarImagemG(){ desligarImagemG(); window.setTimeout(ligarImagemG,3000); window.setTimeout(removerClasseG,3000) }
function inserirClasseG(){ window.document.getElementById('imgg').classList.add('escolhido')}
function removerClasseG (){ window.document.getElementById('imgg').classList.remove('escolhido')}

function desligarImagemH(){ img8.removeEventListener('click',livro8Imagem);  }
function ligarImagemH(){ img8.addEventListener('click', livro8Imagem);}
function religarImagemH(){ desligarImagemH(); window.setTimeout(ligarImagemH,3000); window.setTimeout(removerClasseH,3000) }
function inserirClasseH(){ window.document.getElementById('imgh').classList.add('escolhido')}
function removerClasseH(){ window.document.getElementById('imgh').classList.remove('escolhido')}

function desligarImagemI(){ img9.removeEventListener('click',livro9Imagem);  }
function ligarImagemI(){ img9.addEventListener('click', livro9Imagem);}
function religarImagemI(){ desligarImagemI(); window.setTimeout(ligarImagemI,3000); window.setTimeout(removerClasseI,3000) }
function inserirClasseI(){ window.document.getElementById('imgi').classList.add('escolhido')}
function removerClasseI(){ window.document.getElementById('imgi').classList.remove('escolhido')}

function desligarImagemJ(){ img10.removeEventListener('click',livro10Imagem);  }
function ligarImagemJ(){ img10.addEventListener('click', livro10Imagem);}
function religarImagemJ(){ desligarImagemJ(); window.setTimeout(ligarImagemJ,3000); window.setTimeout(removerClasseJ,3000) }
function inserirClasseJ(){ window.document.getElementById('imgj').classList.add('escolhido')}
function removerClasseJ(){ window.document.getElementById('imgj').classList.remove('escolhido')}


function livro1Imagem() { 
    a=a+1; 
    let contadorA=parseInt(localStorage.getItem("a"))+1
    localStorage.setItem("a",""+contadorA)
    if(a>=maximo){
        a=maximo
        img1.style.filter='grayscale(1)'
        img1.style.opacity='0.03'
        lopcao1.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("a"))>=total){
        img1.style.filter='grayscale(1)'
        img1.style.opacity='0.03'
        lopcao1.style.color='red' 
    }
    lopcao1.innerText=a
    inserirClasseA()
    religarImagemA()
    if(a>=maximo||parseInt(localStorage.getItem("a"))>=total){window.setTimeout(desligarImagemA,3000)}    
    //alert("a:"+a+" lsa:"+localStorage.getItem("a")+" ContadorA:"+contadorA+" total:"+total)  
}

function livro1menosImagem() {
    a=a-1; 
    let contadorA=parseInt(localStorage.getItem("a"))-1
    localStorage.setItem("a",""+contadorA)
    if(a<0){a=0}
    img1.style.filter='grayscale(0)'
    img1.style.opacity='1'
    lopcao1.style.color='black'
    lopcao1.innerText=a
    ligarImagemA()
    //alert("a:"+a+" lsa:"+localStorage.getItem("a")+" ContadorA:"+contadorA+" total:"+total) 
}

function livro2Imagem() { 
    b=b+1
    let contadorB=parseInt(localStorage.getItem("b"))+1
    localStorage.setItem("b",""+contadorB)
    if(b>=maximo){
        b=maximo
        img2.style.filter='grayscale(1)'
        img2.style.opacity='0.03'
        lopcao2.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("b"))>=total){
        img2.style.filter='grayscale(1)'
        img2.style.opacity='0.03'
        lopcao2.style.color='red' 
    }
    lopcao2.innerText=b
    inserirClasseB()
    religarImagemB()
    if(b>=maximo||parseInt(localStorage.getItem("b"))>=total){window.setTimeout(desligarImagemB,3000)}
    //alert("b:"+b+" lsb:"+localStorage.getItem("b")+" Total: "+total) 
}

function livro2menosImagem() {
    b=b-1
    let contadorB=parseInt(localStorage.getItem("b"))-1
    localStorage.setItem("b",""+contadorB)
    if(b<0){b=0}
    img2.style.filter='grayscale(0)'
    img2.style.opacity='1'
    lopcao2.style.color='black'
    lopcao2.innerText=b
    ligarImagemB()
}

function livro3Imagem() { 
    c=c+1
    let contadorC=parseInt(localStorage.getItem("c"))+1
    localStorage.setItem("c",""+contadorC)
    if(c>=maximo){
        c=maximo
        img3.style.filter='grayscale(1)'
        img3.style.opacity='0.03'
        lopcao3.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("c"))>=total){
        img3.style.filter='grayscale(1)'
        img3.style.opacity='0.03'
        lopcao3.style.color='red' 
    }
    lopcao3.innerText=c
    inserirClasseC()
    religarImagemC()
    if(c>=maximo||parseInt(localStorage.getItem("c"))>=total){window.setTimeout(desligarImagemC,3000)}
    //alert("c:"+c+" lsc:"+localStorage.getItem("c")+" Total: "+total) 
}
function livro3menosImagem() {
    c=c-1
    let contadorC=parseInt(localStorage.getItem("c"))-1
    localStorage.setItem("c",""+contadorC)
    if(c<0){c=0}
    img3.style.filter='grayscale(0)'
    img3.style.opacity='1'
    lopcao3.style.color='black'
    lopcao3.innerText=c
    ligarImagemC()
}

function livro4Imagem() { 
    d=d+1
    let contadorD=parseInt(localStorage.getItem("d"))+1
    localStorage.setItem("d",""+contadorD)
    if(d>=maximo){
        d=maximo
        img4.style.filter='grayscale(1)'
        img4.style.opacity='0.03'
        lopcao4.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("d"))>=total){
        img4.style.filter='grayscale(1)'
        img4.style.opacity='0.03'
        lopcao4.style.color='red' 
    }
    lopcao4.innerText=d
    inserirClasseD()
    religarImagemD()
    if(d>=maximo||parseInt(localStorage.getItem("d"))>=total){window.setTimeout(desligarImagemD,3000)}
    //alert("d:"+d+" lsd:"+localStorage.getItem("d")+" Total: "+total+" CondadorD:"+contadorD) 
}
function livro4menosImagem() {
    d=d-1
    let contadorD=parseInt(localStorage.getItem("d"))-1
    localStorage.setItem("d",""+contadorD)
    if(d<0){d=0}
    img4.style.filter='grayscale(0)'
    img4.style.opacity='1'
    lopcao4.style.color='black'
    lopcao4.innerText=d
    ligarImagemD()
}
function livro5Imagem() { 
    e=e+1
    let contadorE=parseInt(localStorage.getItem("e"))+1
    localStorage.setItem("e",""+contadorE)
    if(e>=maximo){
        e=maximo
        img5.style.filter='grayscale(1)'
        img5.style.opacity='0.03'
        lopcao5.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("e"))>=total){
        img5.style.filter='grayscale(1)'
        img5.style.opacity='0.03'
        lopcao5.style.color='red' 
    }
    lopcao5.innerText=e 
    inserirClasseE()
    religarImagemE()
    if(e>=maximo||parseInt(localStorage.getItem("e"))>=total){window.setTimeout(desligarImagemE,3000)}
    //alert("e:"+e+" lse:"+localStorage.getItem("e")+" Total: "+total) 
}
function livro5menosImagem() {
    e=e-1
    let contadorE=parseInt(localStorage.getItem("e"))-1
    localStorage.setItem("e",""+contadorE)
    if(e<0){e=0}
    img5.style.filter='grayscale(0)'
    img5.style.opacity='1'
    lopcao5.style.color='black'
    lopcao5.innerText=e
    ligarImagemE()
}

function livro6Imagem() { 
    f=f+1;
    let contadorF=parseInt(localStorage.getItem("f"))+1
    localStorage.setItem("f",""+contadorF)
    if(f>=maximo){
    f=maximo
    img6.style.filter='grayscale(1)'
    img6.style.opacity='0.03'
    lopcao6.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("f"))>=total){
        img6.style.filter='grayscale(1)'
        img6.style.opacity='0.03'
        lopcao6.style.color='red' 
    } 
    lopcao6.innerText=f 
    inserirClasseF()
    religarImagemF()
    if(f>=maximo||parseInt(localStorage.getItem("f"))>=total){window.setTimeout(desligarImagemF,3000)}
    //alert("f:"+f+" lsf:"+localStorage.getItem("f")+" Total: "+total) 
}
function livro6menosImagem() { 
    f=f-1;
    let contadorF=parseInt(localStorage.getItem("f"))-1
    localStorage.setItem("f",""+contadorF)
    if(f<0){f=0}
    img6.style.filter='grayscale(0)'
    img6.style.opacity='1'
    lopcao6.style.color='black'
    lopcao6.innerText=f;
    ligarImagemF()
}
function livro7Imagem() { 
    g=g+1; 
    let contadorG=parseInt(localStorage.getItem("g"))+1
    localStorage.setItem("g",""+contadorG)
    if(g>=maximo){
        g=maximo
        img7.style.filter='grayscale(1)'
        img7.style.opacity='0.03'
        lopcao7.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("g"))>=total){
        img7.style.filter='grayscale(1)'
        img7.style.opacity='0.03'
        lopcao7.style.color='red' 
    }  
    lopcao7.innerText=g 
    inserirClasseG()
    religarImagemG()
    if(g>=maximo||parseInt(localStorage.getItem("g"))>=total){window.setTimeout(desligarImagemG,3000)}
    //alert("g:"+g+" lsg:"+localStorage.getItem("g")+" Total: "+total) 
}
function livro7menosImagem() { 
    g=g-1;
    let contadorG=parseInt(localStorage.getItem("g"))-1
    localStorage.setItem("g",""+contadorG)
    if(g<0){g=0}
    img7.style.filter='grayscale(0)'
    img7.style.opacity='1'
    lopcao7.style.color='black'
    lopcao7.innerText=g; 
    ligarImagemG()
}

function livro8Imagem() { 
    h=h+1; 
    let contadorH=parseInt(localStorage.getItem("h"))+1
    localStorage.setItem("h",""+contadorH)
    if(h>=maximo){
        h=maximo
        img8.style.filter='grayscale(1)'
        img8.style.opacity='0.03'
        lopcao8.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("h"))>=total){
        img8.style.filter='grayscale(1)'
        img8.style.opacity='0.03'
        lopcao8.style.color='red' 
    }  
    lopcao8.innerText=h 
    inserirClasseH()
    religarImagemH()
    if(h>=maximo||parseInt(localStorage.getItem("h"))>=total){window.setTimeout(desligarImagemH,3000)}
    //alert("h:"+h+" lsh:"+localStorage.getItem("h")+" Total: "+total)
}
function livro8menosImagem() { 
    h=h-1; 
    let contadorH=parseInt(localStorage.getItem("h"))-1
    localStorage.setItem("h",""+contadorH)
    if(h<0){h=0}
    img8.style.filter='grayscale(0)'
    img8.style.opacity='1'
    lopcao8.style.color='black'
    lopcao8.innerText=h; 
    ligarImagemH()
}
function livro9Imagem() { 
    i=i+1; 
    let contadorI=parseInt(localStorage.getItem("i"))+1
    localStorage.setItem("i",""+contadorI)
    if(i>=maximo){
        i=maximo
        img9.style.filter='grayscale(1)'
        img9.style.opacity='0.03'
        lopcao9.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("i"))>=total){
        img9.style.filter='grayscale(1)'
        img9.style.opacity='0.03'
        lopcao9.style.color='red' 
    }  
    lopcao9.innerText=i 
    lopcao8.innerText=h 
    inserirClasseI()
    religarImagemI()
    if(i>=maximo||parseInt(localStorage.getItem("i"))>=total){window.setTimeout(desligarImagemI,3000)}
    //alert("i:"+i+" lsi:"+localStorage.getItem("i")+" Total: "+total)
}
function livro9menosImagem() { 
    i=i-1; 
    let contadorI=parseInt(localStorage.getItem("i"))-1
    localStorage.setItem("i",""+contadorI)
    if(i<0){i=0}
    img9.style.filter='grayscale(0)'
    img9.style.opacity='1'
    lopcao9.style.color='black'
    lopcao9.innerText=i; 
    ligarImagemI()
}
function livro10Imagem() { 
    j=j+1; 
    let contadorJ=parseInt(localStorage.getItem("j"))+1
    localStorage.setItem("j",""+contadorJ)
    if(j>=maximo){
        j=maximo
        img10.style.filter='grayscale(1)'
        img10.style.opacity='0.03'
        lopcao10.style.color='red'
    }else 
    if(parseInt(localStorage.getItem("j"))>=total){
        img10.style.filter='grayscale(1)'
        img10.style.opacity='0.03'
        lopcao10.style.color='red' 
    }  
    lopcao10.innerText=j  
    inserirClasseJ()
    religarImagemJ()
    if(j>=maximo||parseInt(localStorage.getItem("j"))>=total){window.setTimeout(desligarImagemJ,3000)}
    //alert("j:"+j+" lsj:"+localStorage.getItem("j")+" Total: "+total)
}
function livro10menosImagem() { 
    j=j-1; 
    let contadorJ=parseInt(localStorage.getItem("j"))-1
    localStorage.setItem("j",""+contadorJ)
    if(j<0){j=0}
    img10.style.filter='grayscale(0)'
    img10.style.opacity='1'
    lopcao10.style.color='black'
    lopcao10.innerText=j; 
    ligarImagemJ()
}
