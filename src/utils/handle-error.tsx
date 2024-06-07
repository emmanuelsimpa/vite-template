import { toast } from "@/common/components/ui/use-toast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any) => {
  if (error.data) {
    return toast({
      description: (
        <p className="h5">{error?.data?.message || error?.data?.error}</p>
      ),
      variant: "destructive",
    });
  } else if (error.request) {
    // The request was made but no response was received
    return toast({
      description: (
        <div>
          <p className="p1">No Response</p>
          <p className="h5">Server did not respond</p>
        </div>
      ),
      variant: "destructive",
    });
  } else if (error.status === "FETCH_ERROR") {
    // No network connection
    return toast({
      description: (
        <div>
          <p className="p1">No network connection</p>
          <p className="h5">Please try again</p>
        </div>
      ),
      variant: "destructive",
    });
  } else {
    // Something happened in setting up the request that triggered an Error
    if (error instanceof Error) {
      // Network errors or other errors
      return toast({
        description: (
          <div>
            <p className="p1">Network Error</p>
            <p className="h5">{error.message}</p>
          </div>
        ),
        variant: "destructive",
      });
    } else {
      // Unexpected errors
      return toast({
        description: (
          <div>
            <p className="p1">Unexpected Error</p>
            <p className="h5">An unexpected error occurred</p>
          </div>
        ),
        variant: "destructive",
      });
    }
  }
};
