(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = window.PROJECTS ? window.PROJECTS[id] : null;

  const notFound = document.getElementById("not-found");
  const detail = document.getElementById("project-detail");

  if (!data) {
    notFound.hidden = false;
    detail.hidden = true;
    return;
  }

  notFound.hidden = true;
  detail.hidden = false;

  document.title = data.title + " — Isaac Ramírez";

  // Title
  document.getElementById("pd-title").textContent = data.title;
  const hero = document.getElementById("pd-hero");
  hero.src = data.heroImage;
  hero.alt = data.title;

  function fillParagraphs(containerId, paragraphs) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    (paragraphs || []).forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      container.appendChild(p);
    });
  }

  // Gif
  function fillGif(mediaContainerId, gifId, src) {
    const mediaContainer = document.getElementById(mediaContainerId);
    const img = document.getElementById(gifId);
    if (src) {
      img.src = src;
      mediaContainer.classList.add("has-media");
    } else {
      mediaContainer.classList.remove("has-media");
    }
  }

  // Description
  fillParagraphs("pd-desc-text", data.description);
  fillGif("pd-desc-media", "pd-desc-gif", data.descriptionGif);

  // Trailer
  const videoSection = document.getElementById("pd-video-section");
  if (data.youtubeId) {
    document.getElementById("pd-video").src =
      "https://www.youtube.com/embed/" + data.youtubeId;
    videoSection.hidden = false;
  } else {
    videoSection.hidden = true;
  }

  // Links
  const linksSection = document.getElementById("pd-links");
  const downloadLink = document.getElementById("pd-download");
  const githubLink = document.getElementById("pd-github");
  downloadLink.hidden = !data.downloadLink;
  if (data.downloadLink) downloadLink.href = data.downloadLink;
  githubLink.hidden = !data.githubLink;
  if (data.githubLink) githubLink.href = data.githubLink;
  linksSection.hidden = !data.downloadLink && !data.githubLink;

  // Info
  const info = data.info || {};
  document.getElementById("pd-language").textContent = info.language || "—";
  document.getElementById("pd-engine").textContent = info.engine || "—";
  document.getElementById("pd-devtime").textContent = info.devTime || "—";
  document.getElementById("pd-team").textContent = info.team || "—";
  document.getElementById("pd-year").textContent = info.year || "—";

  const roleInfoItem = document.getElementById("pd-role-info-item");
  if (info.role) {
    document.getElementById("pd-info-role").textContent = info.role;
    roleInfoItem.hidden = false;
  } else {
    roleInfoItem.hidden = true;
  }

  // Role section
  const roleSection = document.getElementById("pd-role-section");
  const role = data.role || {};
  if (role.paragraphs && role.paragraphs.length) {
    fillParagraphs("pd-role-text", role.paragraphs);
    fillGif("pd-role-media", "pd-role-gif", role.gif);
    roleSection.hidden = false;
  } else {
    roleSection.hidden = true;
  }

  // Contributions section
  const contribSection = document.getElementById("pd-contrib-section");
  const contribution = data.contribution || {};
  if (contribution.paragraphs && contribution.paragraphs.length) {
    fillParagraphs("pd-contrib-text", contribution.paragraphs);
    fillGif("pd-contrib-media", "pd-contrib-gif", contribution.gif);
    contribSection.hidden = false;
  } else {
    contribSection.hidden = true;
  }
})();