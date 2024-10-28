const ResumeButton = () => {
    const resumePath = "https://res.cloudinary.com/drq90wt7m/image/upload/v1726122078/PORTFOLIO%20RESUME/rl0scuktf0pt1zjmpuwl.pdf"; // Path to resume file in the public folder
  
    const handleClick = () => {
      const userChoice = window.confirm(
        "Do you want to download the resume? Click 'Cancel' to preview it."
      );
  
      if (userChoice) {
        // Trigger download
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'resume.pdf';
        link.click();
      } else {
        // Open in a new tab for preview
        window.open(resumePath, '_blank', 'noopener,noreferrer');
      }
    };
  
    return (
      <button
        onClick={handleClick}
        className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  rounded-xl  scale-105 px-3 py-2 font-bold mb-6 bg-opacity-95"
      >
         Resume
      </button>
    );
  };
  
  export default ResumeButton;
