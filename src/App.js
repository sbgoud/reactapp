import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <div class="total-box">
      <div> Role</div>
    <div>
      <div class="box-element1"><strong>Viewer</strong>
      <div>
        Cannot do anything except view data
      </div>
      </div>
      <div class="box-element2"><strong>Controller</strong>
      <div>
        Can make changes to invoices, no payments
      </div></div>
      <div class="box-element3"><strong>Editor</strong>
      <div>
        All editor permissions, can make payments
      </div></div>
      <div class="box-element4"><strong>Admin</strong>
      <div>
        Full access, can add team members
      </div></div>

      <div class="box-element5"><a href=''>Remove</a></div>
      
      <div class="box-element6"><a href=''>Update permissions</a></div>
      

    </div>
    </div>
    </body>
  );
}

export default App;
