
var T = "5640820074:AAGv9fS4bkI3IeU83WSwP0Fqk05-PyEEedI"

async function upd(req) {
    req[Object.keys(req)[1]].type = Object.keys(req)[1]
    req = req[Object.keys(req)[1]]
    req.from = req.chat || req.from
    req.chat = req.from.id
    req.from = req.from.username || req.from.title || req.from.first_name
    if (req.text && req.text.startsWith(".")) {
        req.ref = req.text.replace(".", "")
        delete req.text
    }
    if (req.entities && req.text) {
        req.entities.forEach((element) => {
            if (element.type === "text_link") {
                req.url = element.url
            } else {
                req[element.type] = req.text.substring(element.offset, (element.offset + element.length))
                if (req.text === req[element.type]) {
                    delete req.text
                }
            }
        })
        delete req.entities
    }
    if (req.document && (req.document.mime_type.startsWith("image") || req.document.mime_type.startsWith("video"))) {
        req.photo = [{
            file_size: req.document.file_size,
            file_id: req.document.file_id
        }]
        delete req.document
    }
    if (req.photo) {
        if (!req.caption) {
            req.caption = ""
        } else {
            req.caption = req.caption.toLowerCase()
        }
        req.photo = req.photo[req.photo.length - 1]
        req.width = req.photo.width
        req.photo = await fetch('https://api.telegram.org/bot' + T + '/getFile?file_id=' + req.photo.file_id)
            .then(r => r.json())
            .then(r => {
                return 'https://api.telegram.org/file/bot' + T + '/' + r.result.file_path
            })
    }
    if (req.location && !req.id && !req.result_id) {
        req.location = req.location.latitude.toFixed(5) + "," + req.location.longitude.toFixed(5)
    }

    return req
}


export default {
  async fetch(request) {


     var r = async x => await fetch("https://api.logflare.app/logs?api_key=68vIfYkFdI7C&source=063bcdd5-55a4-4188-bc3f-1f393697f443", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "log_entry": x.type,
          "metadata": x
        })
      })


 


    if (request.method === "POST") {
  var req = await request.json()

      var reqBody = await upd(req)
         await r(reqBody)
      
      	var B = {
		"method": "sendmessage",
		"text": reqBody,
	"chat_id": reqBody.chat
	}
              return new Response(JSON.stringify(B, null, 4), {
    headers: {
      'content-type': 'application/json',
    }
  })
    } 
  },
};