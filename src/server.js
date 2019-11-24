const express = require("express");
const app = express();

// Contém todo o conteúdo de todos os quizzes
const quizzesContent = require("./quizzesContent");

// Retorna todas as informações de todos os quizzes
app.get("/quizzes", (req, res) => res.json(quizzesContent));

// Retorna as informações de um quiz específico
app.get("/quizzes/:quizId", (req, res) => {
  // Verificar se um quiz com esse id existe
  if (Object.getOwnPropertyNames(quizzesContent).includes(req.params.quizId)) {
    res.json(quizzesContent[req.params.quizId]);
  }
  else {
    res.status(404).send(`Erro 404: Não existe um quiz com o id "${req.params.quizId}".`);
  }
});

app.listen(3333);
