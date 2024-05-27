import Collapsible from "react-collapsible";
const LeftBar = () => {
  return (
    <div className="bg-[#2a3163] w-[220px] h-[610px] text-white px-[20px]">
      <p className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="m25.18 12.32l-5.91 5.81a3 3 0 1 0 1.41 1.42l5.92-5.81Z"
            className="clr-i-outline clr-i-outline-path-1"
          />
          <path
            fill="currentColor"
            d="M18 4.25A16.49 16.49 0 0 0 5.4 31.4l.3.35h24.6l.3-.35A16.49 16.49 0 0 0 18 4.25m11.34 25.5H6.66a14.43 14.43 0 0 1-3.11-7.84H7v-2H3.55A14.41 14.41 0 0 1 7 11.29l2.45 2.45l1.41-1.41l-2.43-2.46A14.41 14.41 0 0 1 17 6.29v3.5h2V6.3a14.47 14.47 0 0 1 13.4 13.61h-3.48v2h3.53a14.43 14.43 0 0 1-3.11 7.84"
            className="clr-i-outline clr-i-outline-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
        DashBoard
      </p>
      <p className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 50 50"
        >
          <path
            fill="currentColor"
            d="M43 12H0v26h50V12zm5 19.271A6.7 6.7 0 0 0 43.271 36H6.729A6.703 6.703 0 0 0 2 31.271V18.729A6.703 6.703 0 0 0 6.729 14h36.565A7.007 7.007 0 0 0 48 18.706zm-20.884-4.216c-.23-.14-.116-.269-1.116-.388v2.897l.548-.102c.742-.26 1.114-.745 1.114-1.451c0-.409-.183-.731-.546-.956m-4.501-4.727c0 .445.203.78.607 1c.155.087.416.184.777.289v-2.741a2.394 2.394 0 0 0-.769.315c-.41.272-.615.652-.615 1.137M25 15c-4.971 0-9 4.478-9 10c0 5.521 4.029 10 9 10s9-4.479 9-10c0-5.522-4.029-10-9-10m3.854 15.654c-.679.58-1.854.935-2.854 1.069V33h-2v-1.3c-1.044-.142-1.909-.3-2.588-.835A3.72 3.72 0 0 1 20 28h2.488c.081 0 .239.801.475 1.084c.245.291.593.325 1.037.448v-3.405c-1.217-.281-2.065-.584-2.536-.91c-.841-.575-1.261-1.476-1.261-2.7c0-1.117.411-2.045 1.234-2.784c.628-.565 1.484-.912 2.563-1.046V17h2v1.74c1 .149 1.676.613 2.3 1.076c.939.697 1.6 1.184 1.645 3.184h-2.506c-.047-1-.549-1.432-1.172-1.748a2.037 2.037 0 0 1-.267-.207v3.143l.902.174c.959.226 1.846.528 2.324.905c.744.588 1.032 1.437 1.032 2.547c.002 1.14-.524 2.086-1.404 2.84"
          />
        </svg>
        <Collapsible trigger="Finance Panel">
          <div>
            <p className="flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="m25.18 12.32l-5.91 5.81a3 3 0 1 0 1.41 1.42l5.92-5.81Z"
                  className="clr-i-outline clr-i-outline-path-1"
                />
                <path
                  fill="currentColor"
                  d="M18 4.25A16.49 16.49 0 0 0 5.4 31.4l.3.35h24.6l.3-.35A16.49 16.49 0 0 0 18 4.25m11.34 25.5H6.66a14.43 14.43 0 0 1-3.11-7.84H7v-2H3.55A14.41 14.41 0 0 1 7 11.29l2.45 2.45l1.41-1.41l-2.43-2.46A14.41 14.41 0 0 1 17 6.29v3.5h2V6.3a14.47 14.47 0 0 1 13.4 13.61h-3.48v2h3.53a14.43 14.43 0 0 1-3.11 7.84"
                  className="clr-i-outline clr-i-outline-path-2"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
              DashBoard
            </p>
            <p className="flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m20 8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9 19H7v-9h2zm4 0h-2v-6h2zm4 0h-2v-3h2zM14 9h-1V4l5 5z"
                />
              </svg>
              Reports
            </p>
            <p className="flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v.01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </g>
              </svg>
              BCLB Report
            </p>
          </div>
        </Collapsible>
      </p>
      <p className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 -4 24 24"
        >
          <path
            fill="currentColor"
            d="M7 5h1a1 1 0 1 1 0 2H7v1a1 1 0 1 1-2 0V7H4a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0zm2.318-4h5.364A6 6 0 0 1 24 6c0 3.314-2.686 10-6 10c-1.976 0-3.729-2.378-4.822-5h-2.356C9.73 13.622 7.976 16 6 16C2.686 16 0 9.314 0 6a6 6 0 0 1 9.318-5m5.968 2H8.714l-.504-.335A4 4 0 0 0 2 6c0 3.117 2.542 8 4 8c.722 0 2.004-1.438 2.976-3.77L9.49 9h5.022l.513 1.23C15.996 12.562 17.278 14 18 14c1.458 0 4-4.883 4-8a4 4 0 0 0-6.21-3.335zM18 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
          />
        </svg>
        <Collapsible trigger="Gaming panel">
          <div>
            <p className="flex items-center gap-[10px] text-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="m25.18 12.32l-5.91 5.81a3 3 0 1 0 1.41 1.42l5.92-5.81Z"
                  className="clr-i-outline clr-i-outline-path-1"
                />
                <path
                  fill="currentColor"
                  d="M18 4.25A16.49 16.49 0 0 0 5.4 31.4l.3.35h24.6l.3-.35A16.49 16.49 0 0 0 18 4.25m11.34 25.5H6.66a14.43 14.43 0 0 1-3.11-7.84H7v-2H3.55A14.41 14.41 0 0 1 7 11.29l2.45 2.45l1.41-1.41l-2.43-2.46A14.41 14.41 0 0 1 17 6.29v3.5h2V6.3a14.47 14.47 0 0 1 13.4 13.61h-3.48v2h3.53a14.43 14.43 0 0 1-3.11 7.84"
                  className="clr-i-outline clr-i-outline-path-2"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
              DashBoard
            </p>
            <p className="flex items-center gap-[10px] text-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m20 8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9 19H7v-9h2zm4 0h-2v-6h2zm4 0h-2v-3h2zM14 9h-1V4l5 5z"
                />
              </svg>
              <Collapsible trigger="Reports">
                <p className="flex items-center gap-[10px] text-[12px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M22 8v2c2.206 0 4 1.794 4 4s-1.794 4-4 4H10v-5l-6 6l6 6v-5h12c3.309 0 6-2.691 6-6s-2.691-6-6-6"
                    />
                  </svg>
                  Events report
                </p>
                <p className="flex items-center gap-[10px] text-[12px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.61A184 184 0 0 1 128 136a184.1 184.1 0 0 1-88-22.38V72Zm0 128H40v-68.36A200.2 200.2 0 0 0 128 152a200.25 200.25 0 0 0 88-20.37zm-112-88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8"
                    />
                  </svg>
                  Betting Report
                </p>
              </Collapsible>
            </p>
            <p className="flex items-center gap-[10px] text-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 -4 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 5h1a1 1 0 1 1 0 2H7v1a1 1 0 1 1-2 0V7H4a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0zm2.318-4h5.364A6 6 0 0 1 24 6c0 3.314-2.686 10-6 10c-1.976 0-3.729-2.378-4.822-5h-2.356C9.73 13.622 7.976 16 6 16C2.686 16 0 9.314 0 6a6 6 0 0 1 9.318-5m5.968 2H8.714l-.504-.335A4 4 0 0 0 2 6c0 3.117 2.542 8 4 8c.722 0 2.004-1.438 2.976-3.77L9.49 9h5.022l.513 1.23C15.996 12.562 17.278 14 18 14c1.458 0 4-4.883 4-8a4 4 0 0 0-6.21-3.335zM18 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
                />
              </svg>
              <Collapsible trigger="Other Games">
                <p className="flex items-center gap-[10px] text-[12px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#d0d1d2"
                      d="M7.323 58.23c0 3 2.676 5.434 5.985 5.434h38.17c3.303 0 5.985-2.431 5.985-5.434V9.266c0-3-2.683-5.432-5.985-5.432h-38.17c-3.31 0-5.985 2.431-5.985 5.432z"
                    />
                    <path
                      fill="#e7e6e6"
                      d="M7.323 54.4c0 3 2.676 5.434 5.985 5.434h38.17c3.303 0 5.985-2.433 5.985-5.434V5.435c.001-3-2.682-5.432-5.985-5.432h-38.17c-3.31 0-5.985 2.431-5.985 5.432z"
                    />
                    <path
                      fill="#35494d"
                      d="M49.919 13.159H15.961c-2.287 0-2.287-3.211 0-3.211h33.958c2.28-.001 2.28 3.211 0 3.211m0 6.518H15.961c-2.287 0-2.287-3.209 0-3.209h33.958c2.28 0 2.28 3.209 0 3.209m0 6.663H15.961c-2.287 0-2.287-3.211 0-3.211h33.958c2.28 0 2.28 3.211 0 3.211m0 6.519H15.961c-2.287 0-2.287-3.212 0-3.212h33.958c2.28 0 2.28 3.212 0 3.212m0 12.581H34.288c-2.277 0-2.277-3.211 0-3.211h15.631c2.28.001 2.28 3.211 0 3.211"
                    />
                  </svg>
                  Virtual games report
                </p>
                <p className="flex items-center gap-[10px] text-[12px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8 2q-.6.002-1.17.114a.5.5 0 0 0 .194.981a5 5 0 0 1 1.952 0a.5.5 0 0 0 .194-.98A6 6 0 0 0 8 2m3.334 1.01a.5.5 0 1 0-.556.832a5 5 0 0 1 1.38 1.38a.5.5 0 0 0 .831-.556a6 6 0 0 0-1.655-1.655m-6.112.832a.5.5 0 1 0-.556-.831A6 6 0 0 0 3.01 4.666a.5.5 0 1 0 .83.556a5 5 0 0 1 1.381-1.38m8.664 2.988a.5.5 0 1 0-.981.194a5 5 0 0 1 0 1.952a.5.5 0 0 0 .98.194a6 6 0 0 0 0-2.34m-10.79.194a.5.5 0 0 0-.982-.194a6 6 0 0 0 0 2.34a.5.5 0 0 0 .981-.194a5 5 0 0 1 0-1.952m9.893 4.31a.5.5 0 0 0-.83-.556a5 5 0 0 1-1.381 1.38a.5.5 0 0 0 .556.831a6 6 0 0 0 1.655-1.655m-9.147-.556a.5.5 0 0 0-.831.556a6 6 0 0 0 1.655 1.655a.5.5 0 0 0 .556-.83a5 5 0 0 1-1.38-1.381m3.182 2.127a.5.5 0 0 0-.194.98a6 6 0 0 0 2.34 0a.5.5 0 1 0-.194-.98a5 5 0 0 1-1.952 0m3.222-4.47a.5.5 0 0 0 0-.87L7.62 6.077a.75.75 0 0 0-1.12.652v2.542a.75.75 0 0 0 1.12.653z"
                    />
                  </svg>
                  Slot Games report
                </p>
                <p className="flex items-center gap-[10px] text-[12px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M13.888 9.935C14.963 10.812 15.5 11.25 15.5 12s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66c-.237.167-.506.339-.784.508c-1.073.652-1.609.978-2.09.617c-.48-.36-.524-1.116-.612-2.628c-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628c.481-.361 1.018-.035 2.09.617c.278.169.547.341.784.508c.27.19.565.418.862.66Z" />
                      <path
                        stroke-linecap="round"
                        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
                      />
                    </g>
                  </svg>
                  Pragmatic game report
                </p>
              </Collapsible>
            </p>
            <p className="flex items-center gap-[10px] text-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5.65 8L3.5 5.9l1.4-1.45L7.05 6.6zM11 5V2h2v3zm7.4 3l-1.45-1.4l2.15-2.1l1.4 1.4zM9 22v-5l-3-3V9h12v5l-3 3v5z"
                />
              </svg>
              Highlight Games
            </p>
            <p className="flex items-center gap-[10px] text-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8.39 21L3 15.61c0 1.09.04 2.1.2 3.02c.15.92.3 1.47.51 1.66c.19.21.73.36 1.64.52s1.92.19 3.04.19M15.5 9.89L9.89 15.5L8.5 14.11l5.61-5.61zM3.29 13.08l7.63 7.63c2.78-.5 4.98-1.56 6.61-3.18c1.62-1.63 2.68-3.83 3.18-6.61l-7.63-7.63c-2.78.5-4.98 1.56-6.61 3.18s-2.68 3.83-3.18 6.61M15.61 3L21 8.39c0-1.09-.04-2.1-.19-3.02c-.16-.92-.31-1.47-.52-1.66c-.19-.21-.73-.36-1.64-.51S16.73 3 15.61 3"
                />
              </svg>
              Highlight Leagues
            </p>
            <p className="flex items-center gap-[10px] text-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 21v-2h12v2zm5.65-4.85L4 10.5l2.1-2.15L11.8 14zM16 9.8l-5.65-5.7L12.5 2l5.65 5.65zM20.6 20L7.55 6.95l1.4-1.4L22 18.6z"
                />
              </svg>
              Jackpot Opertations
            </p>
          </div>
        </Collapsible>
      </p>
      <p className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256m131.83 176H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432M147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91m65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89"
          />
        </svg>
        Players
      </p>
      <p className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a55 55 0 0 0-9 14.48a55 55 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m-67-35.49a13.7 13.7 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.7 13.7 0 0 1-4.5 10c-9.49 8.4-25.24 11.36-35 12.4c1.2-10.59 4.5-25.98 12.5-34.97m-64.09.36A16.63 16.63 0 0 1 96.59 32h.49a13.7 13.7 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92c-9.72-1-25.44-4-34.92-12.39a13.7 13.7 0 0 1-4.5-10a16.6 16.6 0 0 1 4.82-12.16ZM40 88h80v32H40Zm16 48h64v64H56Zm144 64h-64v-64h64Zm16-80h-80V88h80z"
          />
        </svg>
        Promotions
      </p>
      <p className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor">
            <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4.586l-2.707 2.707a1 1 0 0 1-1.414 0L8.586 19H4a2 2 0 0 1-2-2zm18 0H4v11h5a1 1 0 0 1 .707.293L12 19.586l2.293-2.293A1 1 0 0 1 15 17h5z" />
            <path d="M13.5 11.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" />
          </g>
        </svg>
        Send SMS
      </p>
      <p className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m20 8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9 19H7v-9h2zm4 0h-2v-6h2zm4 0h-2v-3h2zM14 9h-1V4l5 5z"
          />
        </svg>
        <Collapsible trigger="Reports">
          <p className="flex items-center gap-[10px] text-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.5 5.5c1.09 0 2-.92 2-2a2 2 0 0 0-2-2c-1.11 0-2 .88-2 2c0 1.08.89 2 2 2M9.89 19.38l1-4.38L13 17v6h2v-7.5l-2.11-2l.61-3A7.3 7.3 0 0 0 19 13v-2c-1.91 0-3.5-1-4.31-2.42l-1-1.58c-.4-.62-1-1-1.69-1c-.31 0-.5.08-.81.08L6 8.28V13h2V9.58l1.79-.7L8.19 17l-4.9-1l-.4 2z"
              />
            </svg>
            Players report
          </p>
          <p className="flex items-center gap-[10px] text-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M19 4a2 2 0 0 1 2 2v1h-6a5 5 0 0 0 0 10h6v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5a3 3 0 1 1 0-6zm-5 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                />
              </g>
            </svg>
            Financial Report
          </p>
        </Collapsible>
      </p>
      <p className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.425-.75 4.05-2.963T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12z"
          />
        </svg>
        <Collapsible trigger="System security">
          <p className="flex items-center gap-[10px] text-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.4 3.4 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.4 3.4 0 0 0 15 11a3.5 3.5 0 0 0 0-7"
              />
            </svg>
            System Users
          </p>
          <p className="flex items-center gap-[10px] text-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 0 1 2 2m4 0a6 6 0 0 1-7.743 5.743L11 17H9v2H7v2H4a1 1 0 0 1-1-1v-2.586a1 1 0 0 1 .293-.707l5.964-5.964A6 6 0 1 1 21 9"
              />
            </svg>
            Login Trail
          </p>
        </Collapsible>
      </p>
      <p className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"
          />
        </svg>
        <Collapsible trigger="Settings">
          <p className="flex items-center gap-[10px] text-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.4 3.4 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.4 3.4 0 0 0 15 11a3.5 3.5 0 0 0 0-7"
              />
            </svg>
            Slider Images
          </p>
          <p className="flex items-center gap-[10px] text-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.608 1.517c.77-.175 1.57-.267 2.392-.267c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.622-.092-2.392-.267a.75.75 0 1 1 .332-1.463a9.25 9.25 0 1 0 0-18.04a.75.75 0 1 1-.332-1.463M7.314 3.132a.75.75 0 0 1-.235 1.034A9.303 9.303 0 0 0 4.166 7.08a.75.75 0 0 1-1.27-.8A10.803 10.803 0 0 1 6.28 2.897a.75.75 0 0 1 1.035.235M2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392c0 .822.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.283 9.283 0 0 1 2.75 12c0-.709.08-1.398.23-2.06m.152 6.746a.75.75 0 0 1 1.034.235a9.302 9.302 0 0 0 2.913 2.913a.75.75 0 0 1-.8 1.27a10.804 10.804 0 0 1-3.382-3.383a.75.75 0 0 1 .235-1.035"
              />
              <path
                fill="currentColor"
                d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"
              />
            </svg>
            Slot Game Operations
          </p>
          <p className="flex items-center gap-[10px] text-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.608 1.517c.77-.175 1.57-.267 2.392-.267c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.622-.092-2.392-.267a.75.75 0 1 1 .332-1.463a9.25 9.25 0 1 0 0-18.04a.75.75 0 1 1-.332-1.463M7.314 3.132a.75.75 0 0 1-.235 1.034A9.303 9.303 0 0 0 4.166 7.08a.75.75 0 0 1-1.27-.8A10.803 10.803 0 0 1 6.28 2.897a.75.75 0 0 1 1.035.235M2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392c0 .822.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.283 9.283 0 0 1 2.75 12c0-.709.08-1.398.23-2.06m.152 6.746a.75.75 0 0 1 1.034.235a9.302 9.302 0 0 0 2.913 2.913a.75.75 0 0 1-.8 1.27a10.804 10.804 0 0 1-3.382-3.383a.75.75 0 0 1 .235-1.035"
              />
              <path
                fill="currentColor"
                d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"
              />
            </svg>
            Other Operations
          </p>
        </Collapsible>
      </p>
    </div>
  );
};

export default LeftBar;
