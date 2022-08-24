let navbar = ()=>{
    return `    <nav>
    <div id="logo">
      <img
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
        alt=""
      />
    </div>

    <div id="dropdown">
      <ul>
        <li>
          <a href="#">Product <span class="arrow"></span></a>
          <ul>
            <li><a href="#">Bonsai Workflow</a></li>
            <p>
              Look professional, win more clients and manage your business
              from one place
            </p>
            <li><a href="#">Bonsai Tax </a></li>
            <p>
              Track expenses, maximize tax write-offs, and estimate taxes
              without the headache
            </p>
            <li><a href="#">Bonsai Cash </a></li>
            <p>
              Bondsi's all-in-one financial hub: No fees and lightning fast
              payouts
            </p>
          </ul>
        </li>
        <li>
          <a href="#">Templates <span class="arrow"></span></a>
          <ul>
            <li>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg"
                alt=""
              />
              <a href="#">Contract Templates</a>
            </li>
            <li>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg"
                alt=""
              />
              <a href="#">Proposal Templates</a>
            </li>
            <li>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg"
                alt=""
              />
              <a href="#">Invoice Templates</a>
            </li>
            <li>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg"
                alt=""
              />
              <a href="#">Agreement Templates</a>
            </li>
            <li>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg"
                alt=""
              />
              <a href="#">Quote Templates</a>
            </li>
            <li>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg"
                alt=""
              />
              <a href="#">Scope of Work Templates</a>
            </li>
            <li>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg"
                alt=""
              />
              <a href="#">Brief Templates</a>
            </li>
          </ul>
        </li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Reviews</a></li>
      </ul>
    </div>

    <div id="btn">
      <button>LOG IN</button>
      <button>START FREE</button>
    </div>
  </nav>`
}


let footer=()=>{
  return `    <div id="footer">
  <div>
    <p>PRODUCT</p>
    <a href="#">Proposals</a>
    <a href="#">Contracts</a>
    <a href="#">Invoicing</a>
    <a href="#">Client CRM</a>
    <a href="#">Time Tracking</a>
    <a href="#">Task Tracking</a>
    <a href="#">Forms</a>
    <a href="#">Accounting</a>
    <a href="#">Bonsai Tax</a>
    <a href="#">Bonsai Cash</a>
    <a href="#">Pricing</a>
    <a href="#">Bonsai Reviews</a>
  </div>
  <div>
    <p>FREE RESOURCES</p>
    <a href="#">Freelance Resources</a>
    <a href="#">Freelance Blog by Bonsai</a>
    <a href="#">How to Write a Contract</a>
    <a href="#">Online Signature Maker</a>
    <a href="#">Self-Employed Taxes Hub</a>
    <a href="#">Self-Employed Tax Calculator</a>
    <a href="#">Self-Employed Tax Deductions</a>
    <div id="Templates">
      <p>Templates</p>
      <a href="#">Invoice Templates <span class="footer-arrow"></span></a>
      <a href="#">Proposal Templates <span class="footer-arrow"></span></a>
      <a href="#">Contract Templates <span class="footer-arrow"></span></a>
      <a href="#">Agreement Templates <span class="footer-arrow"></span></a>
      <a href="#">Scope of Work Templates <span class="footer-arrow"></span></a>
      <a href="#">Quote Templates <span class="footer-arrow"></span></a>
      <a href="#">Credit Note Templates <span class="footer-arrow"></span></a>
      <a href="#">Estimate Templates</a>
    </div>
  </div>
  <div>
    <p>BONSAI</p>
    <a href="#">About</a>
    <a href="#">Careers</a>
    <a href="#">Support</a>
    <a href="#">LinkedIn</a>
    <a href="#">Twitter</a>
    <a href="#">Privacy policy</a>
    <a href="#">Legal</a>
    <a href="#">Affiliates</a>
    <a href="#">Write for Us</a>
    <a href="#">Comparisons</a>
  </div>
</div>`
}

export {navbar,footer}