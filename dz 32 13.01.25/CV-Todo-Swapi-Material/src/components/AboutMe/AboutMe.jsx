import { Box, Typography, Chip, Divider, Link, List, ListItem, ListItemIcon } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import FolderIcon from "@mui/icons-material/Folder";
import projects from "../Projects/Projects";
import skills from "../Skills/Skills";

const AboutMe = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography
        variant="h3"
        gutterBottom
      >
        Bohdan Ilnytskyi
      </Typography>
      <Typography
        variant="h5"
        color="primary"
        gutterBottom
      >
        Front-end Developer
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">Summary</Typography>
      <Typography
        variant="body1"
        sx={{ mt: 1 }}
      >
        Junior Frontend Developer with practical experience in creating responsive web projects. Proficient in HTML, CSS,
        JavaScript, and modern tools for developing user interfaces. Skilled in building projects with React, working on websites
        from scratch, implementing interactive elements and responsive design. Continuously improving skills and learning new
        technologies.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">Skills</Typography>
      <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            color="primary"
            variant="outlined"
          />
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">Work Experience</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <WorkIcon color="primary" />
          </ListItemIcon>
          <Box>
            <Typography variant="body1">
              <strong>Front-end Developer at Freelance</strong>
            </Typography>
            <Typography variant="body2">Website creation and development</Typography>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              2024 - present
            </Typography>
          </Box>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">Education</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon color="primary" />
          </ListItemIcon>
          <Box>
            <Typography variant="body1">
              <strong>Information Technologies at Odesa National Technical University</strong>
            </Typography>
            <Typography variant="body2">(not graduated)</Typography>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              2024 - present
            </Typography>
          </Box>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">Additional Courses and Trainings</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <StarIcon color="primary" />
          </ListItemIcon>
          <Box>
            <Typography variant="body1">
              <strong>Front-end Basic at Hillel IT School</strong>
            </Typography>
            <Link
              href="https://certificate.ithillel.ua/view/76465807"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate
            </Link>
            <Chip
              label="EXCELLENT"
              color="success"
              size="small"
              sx={{ ml: 1, mr: 1 }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
            >
              2024
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StarIcon color="primary" />
          </ListItemIcon>
          <Box>
            <Typography variant="body1">
              <strong>Front-end Pro at Hillel IT School</strong>
            </Typography>
            <Chip
              label="EXCELLENT"
              color="success"
              size="small"
              sx={{ mr: 1 }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
            >
              2024
            </Typography>
          </Box>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">Portfolio</Typography>
      <List>
        {projects.map((project) => (
          <ListItem key={project.name}>
            <ListItemIcon>
              <FolderIcon color="primary" />
            </ListItemIcon>
            <Box>
              <Typography variant="body1">
                <strong>{project.name}</strong>
              </Typography>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link}
              </Link>
            </Box>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">Hobby</Typography>
      <Typography
        variant="body1"
        sx={{ mt: 1 }}
      >
        I enjoy snowboarding, traveling, and learning new skills. Active outdoor activities inspire me, while constant
        self-improvement helps me discover new opportunities.
      </Typography>
    </Box>
  );
};

export default AboutMe;
