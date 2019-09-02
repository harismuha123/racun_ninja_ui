import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";

require("fullcalendar");
const $ = require("jquery");

class Calendar extends React.Component {
  componentDidMount() {
    $("#fullcalendar").fullCalendar({
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay,listMonth"
      },
      weekNumbers: true,
      eventLimit: true,
      editable: true,
      events: "https://fullcalendar.io/demo-events.json"
    });
  }

  render() {
    return (
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Calendar</h1>

        <Card>
          <CardHeader>
            <CardTitle tag="h5">FullCalendar</CardTitle>
            <h6 className="card-subtitle text-muted">
              Open source JavaScript jQuery plugin for a full-sized, drag & drop
              event calendar.
            </h6>
          </CardHeader>
          <CardBody>
            <div id="fullcalendar" />
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default Calendar;
