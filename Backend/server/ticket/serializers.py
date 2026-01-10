class MultiCitySegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MultiCitySegment
        fields = ['id', 'from_city', 'to_city', 'travel_date']

class FlightSearchSerializer(serializers.ModelSerializer):
    segments = MultiCitySegmentSerializer(many=True, required=False)

    class Meta:
        model = FlightSearch
        fields = '__all__'

    def create(self, validated_data):
        segments_data = validated_data.pop('segments', [])
        flight_search = FlightSearch.objects.create(**validated_data)

        for segment in segments_data:
            MultiCitySegment.objects.create(
                flight_search=flight_search,
                **segment
            )

        return flight_search
