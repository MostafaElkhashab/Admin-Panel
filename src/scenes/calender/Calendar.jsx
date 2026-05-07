import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";
const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dialogBackground =
    theme.palette.mode === "dark" ? colors.primary[400] : "#fff";
  const dialogTextColor = theme.palette.text.primary;
  const { t } = useTranslation();
  const [currentEvents, setCurrentEvents] = useState([]);
  const [openDateModal, setOpenDateModal] = useState(false);
  const [openEventModal, setOpenEventModal] = useState(false);
  const [selectedDateInfo, setSelectedDateInfo] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editedEventTitle, setEditedEventTitle] = useState("");

  const handleDateClick = (selected) => {
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    setSelectedDateInfo(selected);
    setNewEventTitle("");
    setOpenDateModal(true);
  };

  const handleCloseDateModal = () => {
    setSelectedDateInfo(null);
    setNewEventTitle("");
    setOpenDateModal(false);
  };
  const handleAddEvent = () => {
    if (!selectedDateInfo || !newEventTitle.trim()) {
      return;
    }

    const calendarApi = selectedDateInfo.view.calendar;
    calendarApi.addEvent({
      id: `${selectedDateInfo.dateStr}-${newEventTitle}`,
      title: newEventTitle.trim(),
      start: selectedDateInfo.startStr,
      end: selectedDateInfo.endStr,
      allDay: selectedDateInfo.allDay,
    });

    setSelectedDateInfo(null);
    setNewEventTitle("");
    setOpenDateModal(false);
  };

  const handleEventClick = (selected) => {
    setSelectedEvent(selected.event);
    setEditedEventTitle(selected.event.title || "");
    setOpenEventModal(true);
  };

  const handleUpdateEvent = () => {
    if (!selectedEvent) {
      return;
    }

    selectedEvent.setProp(
      "title",
      editedEventTitle.trim() || selectedEvent.title,
    );
    setSelectedEvent(null);
    setOpenEventModal(false);
  };

  const handleDeleteEvent = () => {
    if (!selectedEvent) {
      return;
    }

    selectedEvent.remove();
    setSelectedEvent(null);
    setOpenEventModal(false);
  };

  const handleCloseEventModal = () => {
    setSelectedEvent(null);
    setOpenEventModal(false);
  };
  return (
    <Box m="20px">
      <Header title={t("calendar.title")} subtitle={t("calendar.subtitle")} />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
          sx={{
            overflowY: "auto",
            maxHeight: "75vh",
          }}
        >
          <Typography variant="h5" mb="15px">
            {t("calendar.events")}
          </Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: t("calendar.initialEvents.codingSession"),
                date: "2026-05-14",
              },
              {
                id: "5123",
                title: t("calendar.initialEvents.meetingWithTeam"),
                date: "2026-05-11",
              },
            ]}
          />
        </Box>
      </Box>

      <Dialog
        open={openDateModal}
        onClose={handleCloseDateModal}
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: dialogBackground,
            color: dialogTextColor,
          },
        }}
      >
        <DialogTitle sx={{ color: dialogTextColor }}>
          {t("calendar.createEvent")}
        </DialogTitle>
        <DialogContent>
          <Typography mb={2} sx={{ color: dialogTextColor }}>
            {t("calendar.selectedDate")} {selectedDateInfo?.startStr}
          </Typography>
          <TextField
            autoFocus
            fullWidth
            label={t("calendar.eventTitle")}
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
            margin="dense"
            InputLabelProps={{ sx: { color: dialogTextColor } }}
            sx={{
              input: { color: dialogTextColor },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDateModal}>{t("calendar.cancel")}</Button>
          <Button
            disabled={!newEventTitle.trim()}
            variant="contained"
            onClick={handleAddEvent}
          >
            {t("calendar.add")}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEventModal}
        onClose={handleCloseEventModal}
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: dialogBackground,
            color: dialogTextColor,
          },
        }}
      >
        <DialogTitle sx={{ color: dialogTextColor }}>
          {t("calendar.eventDetails")}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label={t("calendar.eventTitle")}
            value={editedEventTitle}
            onChange={(e) => setEditedEventTitle(e.target.value)}
            margin="dense"
            InputLabelProps={{ sx: { color: dialogTextColor } }}
            sx={{ input: { color: dialogTextColor } }}
          />
          <Typography mt={2} sx={{ color: dialogTextColor }}>
            {t("calendar.start")} {""}
            {selectedEvent
              ? formatDate(selectedEvent.start, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : t("calendar.notAvailable")}
          </Typography>
          {selectedEvent?.end && (
            <Typography>
              {t("calendar.end")} {""}
              {formatDate(selectedEvent.end, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleDeleteEvent}>
            {t("calendar.delete")}
          </Button>
          <Button onClick={handleCloseEventModal}>{t("calendar.close")}</Button>
          <Button
            disabled={!editedEventTitle.trim()}
            variant="contained"
            onClick={handleUpdateEvent}
          >
            {t("calendar.save")}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
