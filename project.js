(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = window.PROJECTS ? window.PROJECTS[id] : null;

  const from = params.get("from");
  const backHref = from === "projects" ? "projects.html" : "index.html#projects";

  const nfBack = document.getElementById("nf-back");
  if (nfBack) nfBack.href = backHref;

  const notFound = document.getElementById("not-found");
  const detail = document.getElementById("project-detail");

  if (!data) {
    notFound.hidden = false;
    detail.hidden = true;
    return;
  }

  notFound.hidden = true;
  detail.hidden = false;

  const backLink = document.querySelector(".project-detail__back");
  if (backLink) backLink.href = backHref;

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

  function fillContribText(containerId, title, paragraphs) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    const paras = paragraphs || [];
    paras.forEach((text, i) => {
      const p = document.createElement("p");
      if (i === 0 && title) {
        const lead = document.createElement("span");
        lead.className = "project-detail__contrib-lead";
        lead.textContent = title + ". ";
        p.appendChild(lead);
        p.appendChild(document.createTextNode(text));
      } else {
        p.textContent = text;
      }
      container.appendChild(p);
    });
  }

  // Gif
  function fillMedia(mediaContainerId, imgId, src) {
    const mediaContainer = document.getElementById(mediaContainerId);
    const img = document.getElementById(imgId);
    if (src) {
      img.src = src;
      mediaContainer.classList.add("has-media");
    } else {
      mediaContainer.classList.remove("has-media");
    }
  }

  // Description
  fillParagraphs("pd-desc-text", data.description);

  const info = data.info || {};
  document.getElementById("pd-language").textContent = info.language || "—";
  document.getElementById("pd-engine").textContent = info.engine || "—";
  document.getElementById("pd-devtime").textContent = info.devTime || "—";
  document.getElementById("pd-team").textContent = info.team || "—";
  document.getElementById("pd-year").textContent = info.year || "—";

  // Role
  const roleSection = document.getElementById("pd-role-section");
  const role = data.role || {};
  if ((role.paragraphs && role.paragraphs.length) || role.title) {
    document.getElementById("pd-role-name").textContent = role.title || "";
    fillParagraphs("pd-role-text", role.paragraphs);
    roleSection.hidden = false;
  } else {
    roleSection.hidden = true;
  }

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

  // Contribution
  const contribSection = document.getElementById("pd-contrib-section");
  const contributions = data.contributions || [];

  for (let i = 0; i < 3; i++) {
    const item = contributions[i];
    const rowEl = document.getElementById("pd-contrib-row-" + i);

    if (item) {
      fillContribText("pd-contrib-text-" + i, item.title, item.paragraphs);
      fillMedia("pd-contrib-media-" + i, "pd-contrib-img-" + i, item.image);
      rowEl.hidden = false;
    } else {
      rowEl.hidden = true;
    }
  }

  contribSection.hidden = contributions.length === 0;
})();