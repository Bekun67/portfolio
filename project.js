(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = window.PROJECTS ? window.PROJECTS[id] : null;

  const from = params.get("from");
  const backHref = from === "projects" ? "projects.html" : "index.html#projects";
  const backLabel = from === "projects" ? "Back to projects" : "Back to home";

  const nfBack = document.getElementById("nf-back");
  if (nfBack) {
    nfBack.href = backHref;
    nfBack.textContent = backLabel;
  }

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
  if (backLink) {
    backLink.href = backHref;
    backLink.innerHTML =
      '<i aria-hidden="true" class="fas fa-arrow-left"></i> ' + backLabel;
  }

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
  document.getElementById("pd-divider-1").hidden = roleSection.hidden;

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

  document.getElementById("pd-divider-2").hidden =
    videoSection.hidden && contribSection.hidden;

  // Awards
  const awardsSection = document.getElementById("pd-awards-section");
  const awardsList = document.getElementById("pd-awards-list");
  const awards = data.awards || [];

  awardsList.innerHTML = "";

  awards.forEach((award, i) => {
    const card = document.createElement("div");
    card.className = "award-card";

    const media = document.createElement("div");
    media.className = "award-card__media";

    const img = document.createElement("img");
    img.className = "award-card__img";
    img.alt = award.title || "";

    if (award.image) {
      img.src = award.image;
      media.classList.add("has-media");
    } else {
      const placeholder = document.createElement("span");
      placeholder.className = "award-card__media-placeholder";
      placeholder.textContent = "Photo coming soon";
      media.appendChild(placeholder);
    }
    media.appendChild(img);

    const text = document.createElement("div");
    text.className = "award-card__text";

    if (award.title) {
      const titleEl = document.createElement("h3");
      titleEl.className = "award-card__title";
      titleEl.textContent = award.title;
      text.appendChild(titleEl);
    }

    if (award.subtitle) {
      const subtitleEl = document.createElement("h4");
      subtitleEl.className = "award-card__subtitle";
      subtitleEl.textContent = award.subtitle;
      text.appendChild(subtitleEl);
    }

    if (award.description) {
      const descEl = document.createElement("p");
      descEl.className = "award-card__desc";
      descEl.textContent = award.description;
      text.appendChild(descEl);
    }

    card.appendChild(media);
    card.appendChild(text);
    awardsList.appendChild(card);
  });

  awardsSection.hidden = awards.length === 0;
  document.getElementById("pd-divider-3").hidden = awardsSection.hidden;
})();