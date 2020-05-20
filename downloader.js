var contentData = {}

chrome.runtime.sendMessage({type: "getPatreonPayload"}, function(payload) {
  if(typeof payload == "undefined") {
    console.error("error!! : data not found!");
  } else {
    contentData = JSON.parse(payload);
    $("#albumTitle").html(contentData.post.data.attributes.content)
    $("#picture_title").attr("src", contentData.post.data.attributes.image.thumb_url)

    contentData.post.included.filter(o => o.type === "media").map(e => {
      const DOM = `<div class="col-md-4">
      <div class="card mb-4 box-shadow">
        <img
          class="card-img-top"
          src="${e.attributes.download_url}"
        />
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <a
                href="${e.attributes.image_urls.default}"
                class="btn btn-sm btn-outline-secondary"
                target="_blank"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`
    $("#data").append(DOM);
    })
    console.log(contentData);
  }
});