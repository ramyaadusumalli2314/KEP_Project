function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Please enter your name");
    return false;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email");
    return false;
  }

  if (phone.length < 10) {
    alert("Please enter a valid phone number");
    return false;
  }

  if (message === "") {
    alert("Please enter your message");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

/* ===== COURSE DATA ===== */
const courseData = {
  fullstack: `
    <h3>Full-Stack Development</h3>
    <p>Industry-focused training with real-time projects.</p>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>Backend & Databases</li>
      <li>Live Projects</li>
    </ul>`,

  data: `
    <h3>Data Science & Analytics</h3>
    <p>Learn Python, SQL, and analytics tools.</p>`,

  ai: `<h3>Artificial Intelligence & ML</h3><p>Real-world AI applications.</p>`,

  cyber: `<h3>Cybersecurity</h3><p>Hands-on security training.</p>`,

  cloud: `<h3>Cloud Computing</h3><p>Modern cloud platforms.</p>`,

  robotics: `<h3>AI Robotics</h3><p>Smart robotics solutions.</p>`,

  iot: `<h3>Internet of Things</h3><p>Connected smart devices.</p>`,

  embedded: `<h3>Embedded Systems</h3><p>Hardware + software integration.</p>`,

  industry: `<h3>Industry 4.0</h3><p>Smart manufacturing tech.</p>`,

  drone: `<h3>Drone & Aerial Robotics</h3><p>Drone applications & tech.</p>`,

  businessgrowth: `<h3>Business Growth Specialist</h3><p>Strategy & growth skills.</p>`,

  stock: `<h3>Stock Market & Investment</h3><p>Trading & investing basics.</p>`,

  powerbi: `<h3>Power BI</h3><p>Data visualization dashboards.</p>`,

  digital: `<h3>Digital Marketing</h3><p>SEO, social media, branding.</p>`,

  entrepreneur: `<h3>Entrepreneurship</h3><p>Startup & leadership skills.</p>`
};

/* ===== COURSE FUNCTIONS ===== */
function openCourse(course) {
  document.getElementById("courseHome").style.display = "none";
  document.getElementById("courseDetails").style.display = "block";
  document.getElementById("detailsContent").innerHTML = courseData[course];
 
}

function goBack() {
  document.getElementById("courseDetails").style.display = "none";
  document.getElementById("courseHome").style.display = "block";
}