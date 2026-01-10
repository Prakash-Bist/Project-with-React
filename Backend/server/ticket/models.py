from django.db import models

class FlightSearch(models.Model):
    TRIP_TYPES = (
        ('one-way', 'One Way'),
        ('round-trip', 'Round Trip'),
        ('multi-city', 'Multi City'),
    )

    trip_type = models.CharField(max_length=20, choices=TRIP_TYPES)
    from_city = models.CharField(max_length=100, blank=True, null=True)
    to_city = models.CharField(max_length=100, blank=True, null=True)
    departure_date = models.DateField(blank=True, null=True)
    return_date = models.DateField(blank=True, null=True)

    passengers = models.PositiveIntegerField(default=1)
    direct_only = models.BooleanField(default=False)
    flexible_dates = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.trip_type} | {self.from_city} → {self.to_city}"

class MultiCitySegment(models.Model):
    flight_search = models.ForeignKey(
        FlightSearch,
        related_name='segments',
        on_delete=models.CASCADE
    )
    from_city = models.CharField(max_length=100)
    to_city = models.CharField(max_length=100)
    travel_date = models.DateField()

    def __str__(self):
        return f"{self.from_city} → {self.to_city}"
