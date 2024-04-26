import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const useSubmitForm = () => {
  const [loading, setLoading] = useState(false);
  const submitForm = async (Name, Email, Message) => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/contact`,
        {
          Name,
          Email,
          Message,
        }
      );
      if (data) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    submitForm,
    loading,
  };
};

export default useSubmitForm;
