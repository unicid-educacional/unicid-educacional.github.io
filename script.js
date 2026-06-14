const modalTemplate = `
  <img src="assets/images/cruzeiro-edu.svg" alt="Cruzeiro Edu" class="top-right-image">
  <h2 style="color: #032f5b;">Consulta de Documentos</h2>
  <p>Bem-vindo Henrry!</p>
  <div style="text-align: center;">
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/henrry.jpg')">Consultar Matricula</button>
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/henrry.jpg')">Acessar Carteirinha Digital</button>
  </div>
`;


function checkLogin() {
            var login = document.getElementById('login').value.trim(); // Remove espaços em branco do início e do final
            var password = document.getElementById('password').value; // Senha permanece a mesma
            var errorMessage = document.getElementById('error-message');

            // Verifica o login e senha do usuário
            if (login.toLowerCase() === 'henrrydecannos@gmail.com' && password === '16112001') {
                document.getElementById('content').innerHTML = `
  <img src="assets/images/cruzeiro-edu.svg" alt="Cruzeiro Edu" class="top-right-image">
  <h2 style="color: #032f5b;">Consulta de Documentos</h2>
  <p>Bem-vindo Henrry!</p>
  <div style="text-align: center;">
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/henrry.jpg')">Consultar Matricula</button>
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/henrry.jpg')">Acessar Carteirinha Digital</button>
  </div>
`;
            // Verifica o login e senha do usuário
            } else if (login.toLowerCase() === 'hilem.vasconcelos@gmail.com' && password === '25071980') {
                document.getElementById('content').innerHTML = `
  <img src="assets/images/cruzeiro-edu.svg" alt="Cruzeiro Edu" class="top-right-image">
  <h2 style="color: #032f5b;">Consulta de Documentos</h2>
  <p>Bem-vinda Hilém!</p>
  <div style="text-align: center;">
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/hilem.jpg')">Consultar Matricula</button>
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/hilem.jpg')">Acessar Carteirinha Digital</button>
  </div>
`;
            // Verifica o login e senha do usuário
            } else if (login.toLowerCase() === 'pazestela1505@gmail.com' && password === '15052001') {
                document.getElementById('content').innerHTML = `
  <img src="assets/images/cruzeiro-edu.svg" alt="Cruzeiro Edu" class="top-right-image">
  <h2 style="color: #032f5b;">Consulta de Documentos</h2>
  <p>Bem-vinda Estela!</p>
  <div style="text-align: center;">
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/estela.jpg')">Consultar Matricula</button>
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/estela.jpg')">Acessar Carteirinha Digital</button>
  </div>
`;
            // Verifica o login e senha do usuário
            } else if (login.toLowerCase() === 'suedvasconcelos@hotmail.com' && password === '140587') {
                document.getElementById('content').innerHTML = `
  <img src="assets/images/cruzeiro-edu.svg" alt="Cruzeiro Edu" class="top-right-image">
  <h2 style="color: #032f5b;">Consulta de Documentos</h2>
  <p>Bem-vinda Sued!</p>
  <div style="text-align: center;">
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/sued.jpeg')">Consultar Matricula</button>
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/sued.jpeg')">Acessar Carteirinha Digital</button>
  </div>
`;   
            // Verifica o login e senha do usuário
            } else if (login.toLowerCase() === 'adrianleonardi@hotmail.com' && password === '14122002') {
                document.getElementById('content').innerHTML = `
  <img src="assets/images/cruzeiro-edu.svg" alt="Cruzeiro Edu" class="top-right-image">
  <h2 style="color: #032f5b;">Consulta de Documentos</h2>
  <p>Bem-vindo Adrian!</p>
  <div style="text-align: center;">
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/adrian.jpeg')">Consultar Matricula</button>
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/adrian.jpeg')">Acessar Carteirinha Digital</button>
  </div>
`;   
            // Verifica o login e senha do usuário
            } else if (login.toLowerCase() === 'allan.cirilos@gmail.com' && password === '02021991') {
                document.getElementById('content').innerHTML = `
  <img src="assets/images/cruzeiro-edu.svg" alt="Cruzeiro Edu" class="top-right-image">
  <h2 style="color: #032f5b;">Consulta de Documentos</h2>
  <p>Bem-vindo Allan!</p>
  <div style="text-align: center;">
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/allan.jpg')">Consultar Matricula</button>
    <button style="display: block; margin: 10px auto;" onclick="showCard('assets/documents/allan.jpg')">Acessar Carteirinha Digital</button>
  </div>
`;
            // Caso o login ou senha estejam incorretos
            } else {
                errorMessage.textContent = 'E-mail ou senha inválidos.';
            }
        }

        function showCard(imagePath) {
            var modal = document.getElementById('card-modal');
            var cardImage = document.getElementById('card-image');
            cardImage.src = imagePath;
            modal.style.display = "flex";
        }

        function closeModal() {
            var modal = document.getElementById('card-modal');
            modal.style.display = "none";
        }

        function forgotPassword() {
            alert('Página de recuperação de senha não implementada.');
        }

        function showAlert() {
            var login = document.getElementById('login').value;

            if (login.trim() !== '') {
                var alertDiv = document.createElement("div");
                alertDiv.classList.add("alert");
                alertDiv.innerHTML = "Uma nova senha temporária foi enviada para seu e-mail!";
                document.body.appendChild(alertDiv);

                setTimeout(function () {
                    alertDiv.style.display = "none";
                }, 3000);
            } else {
                var errorDiv = document.createElement("div");
                errorDiv.classList.add("error");
                errorDiv.innerHTML = "Preencha seu e-mail!";
                document.body.appendChild(errorDiv);

                setTimeout(function () {
                    errorDiv.style.display = "none";
                }, 3000);
            }
        }