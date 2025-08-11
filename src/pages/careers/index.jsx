import React from "react";
import Navbar from "../../components/navbar";
import jobsData from "../../data/sections/jobs.json";
import DarkTheme from "../../layouts/dark";
import ReCAPTCHA from "react-google-recaptcha";

const Careers = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);

  const [captcha, setCaptcha] = React.useState(null)

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [file, setFile] = React.useState(null)
  const [position, setPosition] = React.useState('Junior AI/ML/Data Engineer')
  const [input, setInput] = React.useState('')
  const [loading, setLoading] = React.useState('')
  const [errors, setErrors] = React.useState({ name: null, email: null, phone: null, file: null, position: null })

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, []);

  const validate = () => {
    let isValid = true
    let error = {}

    if (!name.trim()) {
      error.name = 'Name is required!'
      isValid = false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      error.email = 'Please enter a valid email address.'
      isValid = false;
    }
    if (!phone.trim() || !/^\d{8}$/.test(phone)) {
      error.phone = 'Please enter a valid phone number.'
      isValid = false;
    }
    if (file && file.size > 2 * 1024 * 1024) {
      error.file = 'File size should be less than 2MB.'
      isValid = false;
    }
    setErrors(error)
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('recipient_email', email);
    formData.append('hr_email', 'd.baasanjargal@mn.data-artist.com');
    formData.append('phone', phone);
    formData.append('position', position);
    formData.append('message', input);
    formData.append('file', file);

    try {
      const response = await fetch('https://zqyni76hhgexz4douf6qucayk40upyax.lambda-url.ap-northeast-1.on.aws/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Your application has been submitted successfully!');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <header ref={fixedHeader} className="works-header fixed-slider hfixd valign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">
                    <span>Recruitment</span>Help us Humanize Software.
                  </h2>
                  <p>
                    Have questions? Let's discuss how you can join our team.
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Careers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content" ref={MainContent}>
        <section className="services section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cont-info">
                  <h4 className="extra-title mb-50">Available Job Opportunities.</h4>
                </div>
              </div>
              <div className="row">
                {jobsData.map((item, index) => (
                  <div className="col-lg-3 sm-mb20 pb-6" key={item.id}>
                    <div
                      style={{
                        textAlign: 'start',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                      className={`item ${index != jobsData.length - 1 ? "md-mb50" : ""
                        } wow fadeInUp`}
                      data-wow-delay={
                        item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s"
                      }
                    >
                      <div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '16px' }}>
                          <span className={`icon`}>{index + 1}</span>
                          <h6>{item.title}</h6>
                        </div>
                        <p>{item.content}</p>
                      </div>
                      <a href={item.url} style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                        Read More
                        <span style={{ fontSize: '24px' }} className="pe-7s-angle-right"></span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="cont-info">
                  <h4 className="extra-title mb-50 mt-50">Send Your CV</h4>
                </div>
              </div>
              <div className="col-lg-12">
                <form
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: 'column',
                    gap: '24px'
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      alignItems: 'start',
                      flexDirection: 'row',
                      gap: '16px'
                    }}
                  >
                    <div style={{ display: "flex", width: '100%', flexDirection: 'column', gap: '2px' }}>
                      <label>Position</label>
                      <select
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="form-select"
                        placeholder="Default select example"
                      >
                        {jobsData.map((item, index) => (
                          <option value={item.title} key={index}>{item.title}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ display: "flex", width: '100%', flexDirection: 'column', gap: '2px' }}>
                      <label>Name</label>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          borderColor: "rgba(209, 213, 219)",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          backgroundColor: "transparent",
                          borderColor: '#AAABAD',
                          padding: "0.5rem",
                          borderRadius: "0.25rem",
                          outline: "none",
                          color: '#fff'
                        }}
                        placeholder='Your Name'
                        value={name}
                        disabled={loading}
                        onChange={(e) => {
                          errors.name = null
                          setName(e.target.value)
                        }}
                        spellCheck={false}
                      />
                      {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      alignItems: 'start',
                      flexDirection: 'row',
                      gap: '16px'
                    }}
                  >
                    <div style={{ display: "flex", width: '100%', flexDirection: 'column', gap: '2px' }}>
                      <label>E-Mail</label>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          borderColor: "rgba(209, 213, 219)",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          backgroundColor: "transparent",
                          borderColor: '#AAABAD',
                          padding: "0.5rem",
                          borderRadius: "0.25rem",
                          outline: "none",
                          color: '#fff'
                        }}
                        placeholder='Your E-Mail'
                        value={email}
                        disabled={loading}
                        onChange={(e) => {
                          errors.email = null
                          setEmail(e.target.value)
                        }}
                        spellCheck={false}
                      />
                      {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
                    </div>
                    <div style={{ display: "flex", width: '100%', flexDirection: 'column', gap: '2px' }}>
                      <label>Phone Number</label>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          borderColor: "rgba(209, 213, 219)",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          backgroundColor: "transparent",
                          borderColor: '#AAABAD',
                          padding: "0.5rem",
                          borderRadius: "0.25rem",
                          outline: "none",
                          color: '#fff'
                        }}
                        placeholder='Phone Number'
                        value={phone}
                        disabled={loading}
                        onChange={(e) => {
                          errors.phone = null
                          setPhone(e.target.value)
                        }}
                        spellCheck={false}
                      />
                      {errors.phone && <span style={{ color: 'red', fontSize: '12px' }}>{errors.phone}</span>}
                    </div>
                  </div>
                  <div style={{ display: "flex", width: '100%', flexDirection: 'column', gap: '2px' }}>
                    <label>Upload CV</label>
                    <input
                      type="file"
                      accept=".pdf,.docx"
                      onChange={(e) => {
                        errors.file = null
                        setFile(e.target.files[0])
                      }}
                      style={{
                        width: "100%",
                        borderColor: "#AAABAD",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        padding: "0.5rem",
                        borderRadius: "0.25rem",
                        outline: "none",
                        color: '#fff'
                      }}
                      disabled={loading}
                    />
                    {errors.file && <span style={{ color: 'red', fontSize: '12px' }}>{errors.file}</span>}
                  </div>
                  <div style={{ display: "flex", width: '100%', flexDirection: 'column', gap: '2px' }}>
                    <label>Additional Information</label>
                    <textarea
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        borderColor: "#AAABAD",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        padding: "0.5rem",
                        borderRadius: "0.25rem",
                        outline: "none",
                        color: '#fff',
                        minHeight: "100px"
                      }}
                      placeholder='Any additional information you want to share'
                      value={input}
                      disabled={loading}
                      onChange={(e) => setInput(e.target.value)}
                      spellCheck={false}
                    />
                  </div>
                  <ReCAPTCHA onChange={(val) => setCaptcha(val)} sitekey="6LeWbbMqAAAAACrErwFE6EkydBhfSKkRt5xE8VsI"></ReCAPTCHA>
                  <button disabled={!captcha} className="btn" onClick={(e) => { handleSubmit(e) }}>
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section >
      </div >
    </DarkTheme >
  );
};

export default Careers;
