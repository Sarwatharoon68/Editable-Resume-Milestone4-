
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var resumePreview = document.getElementById("resumePreview");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var name = formData.get("name");
        var email = formData.get("email");
        var phone = formData.get("phone");
        var education = formData.get("education");
        var skills = formData.get("skills");
        var experience = formData.get("experience");
        var languages = formData.get("languages");
        var skillsList = skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join("");
        var languagesList = languages.split(",").map(function (language) { return "<li>".concat(language.trim(), "</li>"); }).join("");
        var educationList = education.split("\n").map(function (line) { return "<li>".concat(line.trim(), "</li>"); }).join("");
        var experienceList = experience.split("\n").map(function (line) { return "<li>".concat(line.trim(), "</li>"); }).join("");
        var resumeHTML = "\n      <h3 contenteditable=\"true\">".concat(name, "</h3>\n      <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n      <h4 contenteditable=\"true\">Education</h4>\n      <ul contenteditable=\"true\">").concat(educationList, "</ul>\n      <h4 contenteditable=\"true\">Skills</h4>\n      <ul contenteditable=\"true\">").concat(skillsList, "</ul>\n      <h4 contenteditable=\"true\">Work Experience</h4>\n      <ul contenteditable=\"true\">").concat(experienceList, "</ul>\n      <h4 contenteditable=\"true\">Languages</h4>\n      <ul contenteditable=\"true\">").concat(languagesList, "</ul>\n    ");
        resumeOutput.innerHTML = resumeHTML;
        resumePreview.classList.remove("hidden");
    });
});
