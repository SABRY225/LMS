import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExamAction } from "../../../redux/actions/examAction";
import { toast, ToastContainer } from "react-toastify";

function AddExam() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.coursesByTeacher);
  const [formData, setFormData] = useState({
    courseId: "",
    name: "",
    numberOfQuestions: 1,
    questions: [
      {
        content: " ",
        selectAnswer1: " ",
        selectAnswer2: " ",
        selectAnswer3: " ",
        selectAnswer4: " ",
        answer: " "
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name.startsWith('question_'));
    
    if (!name.startsWith('question_')) {
      const [fieldName, questionIndex] = name.split('_');
      setFormData(prevData => {
        const updatedQuestions = [...prevData.questions];
        updatedQuestions[parseInt(questionIndex, 10)] = {
          ...updatedQuestions[parseInt(questionIndex, 10)],
          [fieldName]: type === 'checkbox' ? checked : value
        };
        return { ...prevData, questions: updatedQuestions };
      });
    }
    if (name === 'numberOfQuestions') {
      const numQuestions = parseInt(value, 10);
      setFormData(prevData => {
        const updatedQuestions = [...prevData.questions];
        while (updatedQuestions.length < numQuestions) {
          updatedQuestions.push({
            content: "",
            selectAnswer1: "",
            selectAnswer2: "",
            selectAnswer3: "",
            selectAnswer4: "",
            answer: ""
          });
        }
        while (updatedQuestions.length > numQuestions) {
          updatedQuestions.pop();
        }
        return { ...prevData, numberOfQuestions: numQuestions, questions: updatedQuestions };
      });
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      name: formData.name,
      questions: formData.questions.map(q => ({
        content: q.content,
        selectAnswer1: q.selectAnswer1,
        selectAnswer2: q.selectAnswer2,
        selectAnswer3: q.selectAnswer3,
        selectAnswer4: q.selectAnswer4,
        answer: q.answer
      }))
    };
    // Handle form submission here
    let newDate=JSON.stringify(dataToSend);
    let credentials={newDate,courseId:formData.courseId}
    console.log(credentials);
    const res=dispatch(addExamAction(credentials));
    console.log(res);
    
    if(res.status === 200 ){
      toast.success(" لقد نجحت عملية اضافة امتحان الكورس ");
    }else{
      toast.error(res.massage);  
    }
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="text-warning fs-3 fw-bold">اضافة امتحان جديد</div>
      </div>
      <form className="row" onSubmit={handleSubmit}>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <label htmlFor="courseId" className="m-2 text-warning fs-5 fw-bold">حدد الكورس</label>
            <select
              name="courseId"
              id="courseId"
              className="inptBox"
              value={formData.courseId}
              onChange={handleChange}
              required
            >
              <option value="" disabled>اختر الكورس</option>
              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <label htmlFor="name" className="m-2 text-warning fs-5 fw-bold">اسم الامتحان</label>
            <input
              type="text"
              name="name"
              id="name"
              className="inptBox"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <hr />
            <label htmlFor="numberOfQuestions" className="m-2 text-warning fs-5 fw-bold">عدد الأسئلة</label>
            <input
              type="number"
              name="numberOfQuestions"
              id="numberOfQuestions"
              className="w-50 inptBox"
              min="1"
              value={formData.numberOfQuestions}
              onChange={handleChange}
            />
          </div>
        </div>
        {formData.questions.map((question, index) => (
          <div className="row mt-5" key={index}>
            <div className="d-flex justify-content-center align-items-center">
              <label htmlFor={`content_${index}`} className="m-2 text-warning fs-5 fw-bold">السؤال</label>
              <input
                type="text"
                name={`content_${index}`}
                id={`content_${index}`}
                className="inptBox"
                value={question.content}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                name={`selectAnswer1_${index}`}
                className="inptBox m-2"
                value={question.selectAnswer1}
                onChange={handleChange}
              />
              <input
                type="text"
                name={`selectAnswer2_${index}`}
                className="inptBox m-2"
                value={question.selectAnswer2}
                onChange={handleChange}
              />
              <input
                type="text"
                name={`selectAnswer3_${index}`}
                className="inptBox m-2"
                value={question.selectAnswer3}
                onChange={handleChange}
              />
              <input
                type="text"
                name={`selectAnswer4_${index}`}
                className="inptBox m-2"
                value={question.selectAnswer4}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-around">
              <input
                className="form-check-input fs-3"
                type="radio"
                name={`answer_${index}`}
                value="1"
                id={`flexCheck1_${index}`}
                checked={question.answer === "1"}
                onChange={handleChange}
              />
              <input
                className="form-check-input fs-3"
                type="radio"
                name={`answer_${index}`}
                value="2"
                id={`flexCheck2_${index}`}
                checked={question.answer === "2"}
                onChange={handleChange}
              />
              <input
                className="form-check-input fs-3"
                type="radio"
                name={`answer_${index}`}
                value="3"
                id={`flexCheck3_${index}`}
                checked={question.answer === "3"}
                onChange={handleChange}
              />
              <input
                className="form-check-input fs-3"
                type="radio"
                name={`answer_${index}`}
                value="4"
                id={`flexCheck4_${index}`}
                checked={question.answer === "4"}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-warning">إرسال</button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddExam;
