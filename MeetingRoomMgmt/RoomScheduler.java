import java.util.*;

public class RoomScheduler {
    private Map<String, MeetingRoom> meetingRooms;

    public RoomScheduler() {
        this.meetingRooms = new HashMap<>();
    }

    public void addMeetingRoom(MeetingRoom room) {
        meetingRooms.put(room.getRoomId(), room);
        System.out.println("Room added: " + room.getRoomName() + ", ID: " + room.getRoomId());
    }

    public String bookRoom(String roomId, EnumSet<RoomFeature> requiredFeatures) {
        MeetingRoom room = meetingRooms.get(roomId);
        if (room != null && room.meetsRequirements(requiredFeatures)) {
            return "Room " + roomId + " booked successfully.";
        } else {
            return "Room " + roomId + " does not meet the required features.";
        }
    }

    public List<String> listAvailableRooms(EnumSet<RoomFeature> requiredFeatures) {
        List<String> availableRooms = new ArrayList<>();
        for (MeetingRoom room : meetingRooms.values()) {
            if (room.meetsRequirements(requiredFeatures)) {
                availableRooms.add(room.getRoomName());
            }
        }
        return availableRooms;
    }

    public void printAvailableRooms(EnumSet<RoomFeature> requiredFeatures) {
        List<String> rooms = listAvailableRooms(requiredFeatures);
        System.out.println("Available rooms with " + requiredFeatures + ": " + rooms);
    }
}
