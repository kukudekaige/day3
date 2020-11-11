const Mock = require("mockjs")

let data = Mock.mock({
    "list|4": [
        {
            "name": "@cname(2)",
            "children|10": [
                {
                    "title": "@ctitle(8)",
                    "id": "@id",
                    "price|1-99": 1,
                    "url": "@image(100x100,@color)",
                    "dest": "@cword(50,100)"
                }
            ]
        }

    ]
})
module.exports = data
