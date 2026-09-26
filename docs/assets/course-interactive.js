/* MkDocs adapter; original animation modules retain their upstream MIT license. */
(function () {
  if (window.mountLessonFigures) window.mountLessonFigures(document);
  document.querySelectorAll('[data-pre-quiz]').forEach(function (host) {
    var data = JSON.parse(host.querySelector('script[type="application/json"]').textContent);
    var panel = document.createElement('div'); host.appendChild(panel);
    function render() {
      panel.replaceChildren(); var answers = [];
      var result = document.createElement('p'); result.setAttribute('aria-live', 'polite');
      data.forEach(function (q, qi) {
        var field = document.createElement('fieldset');
        var legend = document.createElement('legend'); legend.textContent = (qi + 1) + '. ' + q.question; field.appendChild(legend);
        var feedback = document.createElement('p'); feedback.setAttribute('aria-live', 'polite');
        var buttons = [];
        q.options.forEach(function (option, oi) {
          var button = document.createElement('button'); button.type = 'button'; button.textContent = option;
          button.addEventListener('click', function () {
            answers[qi] = oi;
            buttons.forEach(function (b, i) { b.disabled = true; b.classList.toggle('correct', i === q.correct); b.classList.toggle('incorrect', i === oi && oi !== q.correct); });
            feedback.textContent = (oi === q.correct ? '回答正确。 ' : '回答不正确。 ') + q.explanation;
            if (answers.filter(function (a) { return a !== undefined; }).length === data.length) {
              result.textContent = answers.filter(function (a, i) { return a === data[i].correct; }).length + '/' + data.length + ' correct';
            }
          });
          buttons.push(button); field.appendChild(button);
        });
        field.appendChild(feedback); panel.appendChild(field);
      });
      panel.appendChild(result);
      var retry = document.createElement('button'); retry.type = 'button'; retry.textContent = '重新作答 · Retry this check'; retry.addEventListener('click', render); panel.appendChild(retry);
    }
    render();
  });
})();
