class Noticia {
  constructor(titulo, data_publicaçao, resumo, texto){
    this.titulo = titulo
    this.data_publicaçao = data_publicaçao
    this.resumo = resumo
    this.texto = texto
  }
  
 mostrarAtributos(){
   return this.titulo +"\n" + this.data_publicaçao +"\n" + this.resumo +"\n"+ "\n" + this.texto; 
 }
  
}

let noticia = new Noticia("Acidentes em Vosoroca", "10/03/1970", "Os acidentes aumentaram cerca de 80% nos ultimos 10 anos, entedenda o caso...", "Localizado em Nova Andradina a grande Vosoroca vem causando varios acidentes alem da poluiçao extrema que esta causando, este buraco esta se tornando cada vez mais fundo e durante 15 anos o governo nao se movimentou a respeito");
console.log(noticia.mostrarAtributos());
