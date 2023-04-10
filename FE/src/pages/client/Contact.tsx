
type Props = {}

const Contact = (props: Props) => {
  return (
    <div id="contact" className="contarner-contact">
    <div className="text-contact">
      <div className="row">
      </div>
    </div>
    <div className="Contact">
        <div className="form">
            <form action="">
              <div className="inputBox">
                <input type="text" placeholder="Username" id="username"/>
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Email" id="password"/>
              </div>
              <div className="inputBox">
                <textarea name="" id="textarea" cols={40} rows={4}></textarea>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" id="contact"/>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact