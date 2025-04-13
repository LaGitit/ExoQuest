import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { GitHub, Mail } from "@mui/icons-material";
import { FaStackOverflow } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import avatar from "/profile/profile.jpg";

export function ExoNotifyProfileBar() {
  const { ref: bottomRef, inView: isBottomVisible } = useInView({
    threshold: 1,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isBottomVisible);
  }, [isBottomVisible]);

  return (
    <Box>
      <div ref={bottomRef} style={{ height: 1 }} />

      <AnimatePresence>
        {show && (
          <Motion.div
            initial={{ y: 100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: 100, opacity: 0, x: "-50%" }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 15,
            }}
            style={{
              position: "fixed",
              bottom: 24,
              left: "50%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
              background: "rgba(0, 25, 45, 0.75)",
              backdropFilter: "blur(16px)",
              padding: "0.5rem 1rem",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,255,255,0.2)",
              border: "1px solid rgba(0,255,255,0.12)",
              zIndex: 9999,
              color: "#e0f7ff",
              maxWidth: "90vw",
              width: "auto",
            }}
          >
            <Avatar src={avatar} alt="Richard" sx={{ width: 30, height: 30 }} />

            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#8fd4ff",
                whiteSpace: "nowrap",
                maxWidth: "calc(100% - 120px)",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Crafted with purpose
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                href="mailto:richardlawal2001@gmail.com"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  padding: "0.3rem",
                }}
              >
                <Mail fontSize="large" />
              </IconButton>

              <IconButton
                href="https://github.com/LaGitit"
                target="_blank"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  padding: "0.3rem",
                }}
              >
                <GitHub fontSize="large" />
              </IconButton>

              <IconButton
                href="https://stackoverflow.com/users/24829774/zendev"
                target="_blank"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  padding: "0.3rem",
                }}
              >
                <FaStackOverflow size={16} />
              </IconButton>
            </Box>
          </Motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
