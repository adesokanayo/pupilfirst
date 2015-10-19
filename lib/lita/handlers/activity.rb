module Lita
  module Handlers
    class Activity < Handler
      route(/\Aactivity\?\z/, :activity, command: true, restrict_to: :sv_co_team)

      def activity(response)
        active_users = PublicSlackMessage.users_active_last_hour
        active_batched_users = active_users.batched
        user_names = active_batched_users.present? ? "(@" + active_batched_users.map(&:slack_username).join(', @') + ")" : ""
        active_startups = Startup.find active_batched_users.select(:startup).distinct.pluck(:startup_id)
        startup_names = active_startups.present? ? "(" + active_startups.map(&:product_name).join(', ') + ")" : ""
        response.reply(
          "Here's activity for the last hour:",
          "Total active users: " + active_users.count.to_s,
          "Batch founders active: " + active_batched_users.count.to_s + user_names,
          "Batch startups active: " + active_startups.count.to_s + startup_names)
      end
    end

    Lita.register_handler(Activity)
  end
end
