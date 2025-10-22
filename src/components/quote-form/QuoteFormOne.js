import React from 'react';

const QuoteFormOne = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://cms.seorocket.com.br/wp-json/wp/v2/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
      } else {
        alert("Erro ao enviar. Verifique os dados.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão.");
    }
  };

  return (
    <>
      {/* quote form one start */}
      <div className="quote-form-one pt-160 pb-160">
        <div className="quote-form-one__wrapper">
          <div className="quote-form-one__img1">
            <img src="/assets/img/quote-form/shape1.svg" alt="img" />
          </div>
          <div className="quote-form-one__img2">
            <img src="/assets/img/quote-form/shape2.svg" alt="img" />
          </div>
          <div className="quote-form-one__img3">
            <img src="/assets/img/quote-form/shape3.svg" alt="img" />
          </div>
          <div className="quote-form-one__img4">
            <img src="/assets/img/quote-form/shape4.svg" alt="img" />
          </div>
          <div className="quote-form-one__img5">
            <img src="/assets/img/quote-form/shape5.svg" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay=".3s">
                <div className="quote-form-one__img">
                  <img src="/assets/img/quote-form/bg-1.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="quote-form-one__content wow fadeInUp" data-wow-delay=".3s">
                  <h2 className="quote-form-one__title">Get in touch</h2>
                  <p className="mb-40">Projects case study environmental stewardship has impacted economical.</p>
                  <form onSubmit={handleSubmit} className="contact-quote-form">
                    <div className="row">
                      <div className="col-xl-6">
                        <input type="text" name="name" placeholder="Seu nome" required />
                      </div>
                      <div className="col-xl-6">
                        <input type="email" name="email" placeholder="Seu email" required />
                      </div>
                      <div className="col-xl-6">
                        <input type="text" name="phone" placeholder="Seu telefone" />
                      </div>
                      <div className="col-xl-6">
                        <input type="text" name="subject" placeholder="Seu assunto" />
                      </div>
                      <div className="col-xl-12">
                        <textarea name="message" placeholder="Digite sua mensagem..." required></textarea>
                        <button type="submit" className="contact-btn rr-bounce-up">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* quote form one end */}
    </>
  );
};

export default QuoteFormOne;
