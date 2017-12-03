const app = require('reply-to-visit')(4001)
const path = require('path')

app.serveStatic(path.resolve(__dirname, 'public'))

app.addQuestion
(
    {
        question: '________, 彬彬有礼',
        tip: '南湖公园长椅',
        answer: '婉婉有仪'
    },
)