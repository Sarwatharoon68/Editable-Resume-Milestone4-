
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
  const resumePreview = document.getElementById("resumePreview") as HTMLElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const education = formData.get("education") as string;
    const skills = formData.get("skills") as string;
    const experience = formData.get("experience") as string;
    const languages = formData.get("languages") as string;

    const skillsList = skills.split(",").map((skill) => `<li>${skill.trim()}</li>`).join("");
    const languagesList = languages.split(",").map((language) => `<li>${language.trim()}</li>`).join("");
    const educationList = education.split("\n").map((line) => `<li>${line.trim()}</li>`).join("");
    const experienceList = experience.split("\n").map((line) => `<li>${line.trim()}</li>`).join("");

    const resumeHTML = `
      <h3 contenteditable="true">${name}</h3>
      <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
      <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
      <h4 contenteditable="true">Education</h4>
      <ul contenteditable="true">${educationList}</ul>
      <h4 contenteditable="true">Skills</h4>
      <ul contenteditable="true">${skillsList}</ul>
      <h4 contenteditable="true">Work Experience</h4>
      <ul contenteditable="true">${experienceList}</ul>
      <h4 contenteditable="true">Languages</h4>
      <ul contenteditable="true">${languagesList}</ul>
    `;

    resumeOutput.innerHTML = resumeHTML;
    resumePreview.classList.remove("hidden");
  });
});

