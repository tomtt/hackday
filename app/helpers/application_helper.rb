# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  def form_fields(form, args={})
    render({:partial => 'fields', :locals => {:form => form}}.merge(args))
  end
end
