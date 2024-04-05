/*efeito de esconder formulário de cadastro*/

  $(document).ready(function(){

     $("#botao-cadastrar").click(function(){

       $("#form-cadastrar").slideToggle("slow");
       $("#section-login").slideToggle("slow");
       $("#botao-cadastrar").hide();

      });

 });

 #form-cadastrar {
    padding: 50px;
    display: none;
}
    