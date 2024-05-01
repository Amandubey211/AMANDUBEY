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
      if (data.success) {
        toast.success(data.message, {
          position: "bottom-left",
        });
      } else {
        toast.error(data.message, {
          position: "bottom-left",
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Please Try Again", {
        position: "bottom-left",
      });
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
