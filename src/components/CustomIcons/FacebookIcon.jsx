const FacebookIcon = () => {
  const handleHover = () => {
    const svg = document.getElementById("facebookIcon");
    svg.style.backgroundColor = "#39DB4A";
  };

  const handleLeave = () => {
    const svg = document.getElementById("facebookIcon");
    svg.style.backgroundColor = "#EDFFEF";
  };

  return (
    <svg
      id="facebookIcon"
      width="18"
      height="29"
      viewBox="0 0 18 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        borderRadius: "50%",
        transition: "background-color 0.1s",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <path
        d="M16 2H12.1818C10.4941 2 8.8754 2.67045 7.68209 3.86387C6.48863 5.05728 5.81818 6.6759 5.81818 8.36364V12.1818H2V17.2727H5.81818V27.4545H10.9091V17.2727H14.7273L16 12.1818H10.9091V8.36364C10.9091 8.02608 11.0432 7.70237 11.2819 7.46368C11.5205 7.225 11.8443 7.09091 12.1818 7.09091H16V2Z"
        stroke="#484848"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.3s" }}
      />
    </svg>
  );
};

export default FacebookIcon;
