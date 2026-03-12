const api_url = "http://localhost:3000/students";

const form = document.getElementById("studentform");
const tbody = document.getElementById("studentData");

const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");
const branchInput = document.getElementById("branch");
const cgpaInput = document.getElementById("cgpa");

let editMode = false;      
let editStudentId = null; 

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const studentdatas = {
    id: idInput.value,
    name: nameInput.value,
    branch: branchInput.value,
    CGPA: parseFloat(cgpaInput.value)
  };

  try {
    if (editMode) {
      await axios.put(`${api_url}/${editStudentId}`, studentdatas);
      alert("Student updated ");

      editMode = false;
      editStudentId = null;
      idInput.disabled = false;
    } else {
      // ADD (POST)
      await axios.post(api_url, studentdatas);
      alert("Student added ");
    }

    form.reset();
    display();
  } catch (err) {
    console.log(err);
    alert("Something wrong");
  }
});


async function display() {
  try {
    const res = await axios.get(api_url);
    const studentrec = res.data;

    let htmlStr = "";

    for (let student of studentrec) {
      htmlStr += `
        <tr>
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.branch}</td>
          <td>${student.CGPA}</td>
          <td>
            <button onclick="editStudent('${student.id}')">Edit</button>
            <button onclick="deleteStudent('${student.id}')">Delete</button>
          </td>
        </tr>
      `;
    }

    tbody.innerHTML = htmlStr;
  } catch (err) {
    console.log("Display error:", err);
  }
}


async function deleteStudent(id) {
  try {
    await axios.delete(`${api_url}/${id}`);
    alert("Deleted ");
    display();
  } catch (err) {
    console.log(err);
    alert("Delete failed");
  }
}

async function editStudent(id) {
  try {
    const res = await axios.get(`${api_url}/${id}`);
    const student = res.data;

    idInput.value = student.id;
    nameInput.value = student.name;
    branchInput.value = student.branch;
    cgpaInput.value = student.CGPA;

    editMode = true;
    editStudentId = id;

    idInput.disabled = true;

    alert("Now edit values and click submit to update ✍️");
  } catch (err) {
    console.log(err);
    alert("Edit failed ❌");
  }
}

window.deleteStudent = deleteStudent;
window.editStudent = editStudent;

display();
