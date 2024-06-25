// import React, {FC, useState, useEffect } from 'react'
import React, {FC, useState} from 'react'

const axios = require('axios')
import {
  Layout,
  PageBlock,
  Input,
  Toggle,
  // Button,
  FloatingActionBar
} from 'vtex.styleguide'
/*import {useQuery} from 'react-apollo'
import helloworld from './graphql/helloworld.gql'*/
// import talk from './graphql/talk.gql'
// import Button from '@material-ui/core/Button';
// import "./myFile.css";


const style = {
  container: {
    margin: "10px",
  },
  wrapper: {
    display: "flex",
    "flex-wrap": "nowrap",
    "justify-content": "space-between",
    // border: "1px solid red",
    "align-items": "center"
  },
  box: {
    // display: "flex-item",
    // border: "1px solid blue",
    flex: 1,
    // "text-align": "center"
  },
  smallButton: {
    width: "200px"
  }
};

const AdminExample: FC = () => {
  // const [count, setCount] = useState(0)
  const [count] = useState(0)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [powerSwitch, setPowerSwitch] = useState(false)


  // form values
  const [formState, setFormState] = useState({
    account: '',
    emailPrefix: '',
    apiKey: '',
    token: '',
    shippingPrice: '',
    shippingSla: '',
    ordersPerHour: '',
    paymentGroupNumber: '',
    paymentGroupName: '',
    anotherField: '', // Add other fields here if needed
  });

  // handler to change values
  const handleInputChange = (event: any) => {
    const {name, value} = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleToggle = async () => {
    if(powerSwitch) {
      setPowerSwitch(false)
      await stopEngine();
    }
  else
    {
      setPowerSwitch(true)
      await startEngine();
    }
  }

  // Save button
  const saveSettings = async () => {
    console.log('formstate is: ', formState);
    setLoading(true);
    try {
      const response = await axios.post('/_v/app/events-example/save', formState);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  // cancel button. currently stops the runner but should change to the switch
  const getFromServer = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/_v/app/events-example/getFromServer');
      setFormState(response.data.orderSettings);
      setPowerSwitch(response.data.engineRunning);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // start the engine button.
  const startEngine = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/_v/app/events-example/startEngine');
      // setFormState(response.data);
      setData(response.data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // stop the engine
  const stopEngine = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/_v/app/events-example/stopEngine');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  /*const testHandleClick = () => {
    setCount(count + 1);
  };*/

  /*  const handleSaveClick = () => {
      setCount(count + 1);
      // useQuery(talk);
    };*/

  // const {data} = useQuery(helloworld)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <h1>Fetched Data</h1>
      <ul>
        <pre>Data: {JSON.stringify(data, null, 2)}</pre>
      </ul>
      <pre>form state: {JSON.stringify(formState, null, 2)}</pre>
      <PageBlock title="Order Operator Settings"
                 subtitle="Spam orders to fill out the dashboard"
                 variation="full">
        <div style={style.wrapper}>
          <div style={style.box}>
            <h1>Enter your settings</h1>
          </div>
          <div style={style.box}>
            <Toggle
              label={powerSwitch ? "Activated" : "Deactivated"}
              size="large"
              checked={powerSwitch}
              onChange={handleToggle}
            />
          </div>
        </div>
        <div>Hi there</div>
        {/*<div><p>{data?.helloworld}</p></div>*/}
        <div><p>count is: {count}</p></div>
        <div className="mb5">
          <Input className="pb2 mw9" style={style.smallButton} label="Account"
                 name="account"
                 value={formState.account}
                 onChange={handleInputChange}
          />
        </div>
        <div className="mb5">
          <Input
            style={style.smallButton}
            label="Email Prefix"
            placeholder="e.g. your.name"
            name="emailPrefix"
            value={formState.emailPrefix}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Api Key"
                 name="apiKey"
                 value={formState.apiKey}
                 onChange={handleInputChange}
          />
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Token"
                 name="token"
                 value={formState.token}
                 onChange={handleInputChange}
          />
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Shipping Price" placeholder="in pennies e.g. 500"
                 name="shippingPrice"
                 value={formState.shippingPrice}
                 onChange={handleInputChange}
          />
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Shipping SLA Name" placeholder="e.g. Standard Delivery"
                 name="shippingSla"
                 value={formState.shippingSla}
                 onChange={handleInputChange}
          />
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Orders Per Hour" placeholder="e.g. 20"
                 name="ordersPerHour"
                 value={formState.ordersPerHour}
                 onChange={handleInputChange}
          />
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Payment Group #" placeholder="e.g. 17"
                 name="paymentGroupNumber"
                 value={formState.paymentGroupNumber}
                 onChange={handleInputChange}
          />
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Payment Group Name" placeholder="e.g. PromissoryPaymentGroup"
                 name="paymentGroupName"
                 value={formState.paymentGroupName}
                 onChange={handleInputChange}
          />
        </div>
      </PageBlock>

      {/*<Button></Button>*/}


      <FloatingActionBar
        save={{
          label: 'save to server',
          onClick: saveSettings
          // onClick: startEngine
        }}
        cancel={{
          label: 'get from server',
          onClick: getFromServer
        }}
      />
    </Layout>
  );
}

export default AdminExample
